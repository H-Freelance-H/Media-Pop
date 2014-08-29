import random, logging
import time
import string
import base64
import hashlib
import webapp2, jinja2, os
import datetime
import json as simplejson

from google.appengine.ext import ndb
from models import User, Transaction, R, P
from models import User, Transaction
from google.appengine.api import urlfetch
from settings import SETTINGS
from settings import SECRET_SETTINGS
jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.dirname(__file__)), autoescape=True)

"""
    -------------------------------------------------
    |    NOTE:                                      |
    |                                               |
    |       Transaction Code =       12 characters  |
    |       Parser Code =            6 characters   |
    |       Receiver Code =          6 characters   |
    |_______________________________________________|

"""

def get_trans_id():
    while True:
        code_id = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(5))
        trans = Transaction.get_by_id(code_id)
        if not trans:
            break

    return code_id

def parser_code():
    while True:
        code_id = ''.join(random.choice(string.digits) for x in range(6))
        trans = Transaction.query(Transaction.parser_code == code_id).fetch(100)
        if not trans:
            break

    return code_id

def parsel_code():
    while True:
        code_id = ''.join(random.choice(string.digits) for x in range(6))
        trans = P.get_by_id(code_id)
        if not trans:
            break

    return code_id

def receiver_code():
    while True:
        code_id = ''.join(random.choice(string.digits) for x in range(6))
        trans = R.get_by_id(code_id)
        if not trans:
            break

    return code_id

def archive_code():
    while True:
        code_id = ''.join(random.choice(string.digits) for x in range(6))
        trans = UserTransaction.query(UserTransaction.archive_pin == code_id).fetch(100)
        if not trans:
            break

    return code_id

def hash_code(code, kind):
    i = code + kind + SECRET_SETTINGS["password_salt"]
    return base64.b64encode(hashlib.sha1(i).digest())

def get_user(user_id):
    user = User.get_by_id(user_id)
    user.to_object()

    return user


def create_signature(app_id, secret_key):
    code = app_id + secret_key + SECRET_SETTINGS["password_salt"]

    return base64.b64encode(hashlib.sha1(code).digest())




""" Send Email For Receiver """

currenturl = str(os.environ['wsgi.url_scheme'])+"://"+str(os.environ['HTTP_HOST'])+"/"

def send_email(receiver_name=False,receiver_email=False,subject=False,content={},email_type=False):
    if not receiver_email or not receiver_name or not subject or not email_type:
        return False
    template = jinja_environment.get_template('frontend/newsletter.html')
    data = {}
    content['date'] = datetime.datetime.utcnow().strftime('%B %d, %Y %H:%M:%S')
    data['current_url'] = currenturl
    data['email_content'] = content
    data['type'] = email_type
    data['receiver_name'] = receiver_name
    data['receiver_email'] = receiver_email
    receiver = [{"email": receiver_email,"name": receiver_name}]
    send_via_mandrill(receiver, subject, html=template.render(data), plain_text = None, email_type = email_type)
    return True

def send_via_mandrill(receiver, subject, html=None, plain_text = None, email_type = None):
    data = {
    "key": SECRET_SETTINGS["mandrill_key"],
    "message": {
        "html": html,
        "subject": subject,
        "from_email": "notification@deppo.com", #company email
        "from_name": "Deppo", #company name
        "to": receiver,
        "headers": {
            "Reply-To": "team@deppo.com" #company email that accepts reply
        },
        "tags": [
            "notifications",
            email_type
        ],
        "important": True,
        "track_opens": True,
        "track_clicks": True,
        "auto_text": True
        },
    "async": False
    }

    logging.debug(urlfetch.fetch(url="https://mandrillapp.com/api/1.0/" + "messages/send.json", method=urlfetch.POST, payload=simplejson.dumps(data)).content)

def send_email_to_receiver(user, trans):
    content = {}
    content['trans'] = trans
    trans_key = ndb.Key(urlsafe=trans["key"])
    logging.critical(trans_key)
    parcel = R.query(R.trans_key == trans_key).get()
    content['code'] = parcel.codes
    logging.critical(parcel.codes)

    email = send_email(receiver_name=user["name"],receiver_email=user["email"],subject="Receiver Password",content=content,email_type="receiver_code")

    if email:
        return True
    else:
        return False

def send_email_to_sender(user, trans):
    content = {}
    content['trans'] = trans
    email = send_email(receiver_name=user["name"],receiver_email=user["email"],subject="Notification",content=content,email_type="sender_reminder")

    if email:
        return True
    else:
        return False


def send_email_verification(user_email, token):
    logging.critical(user_email)
    logging.critical(token)
    content = {}
    content["token"] = token

    email = send_email(receiver_name="Partner",receiver_email=user_email,subject="Email Verication",content=content, email_type="email_verification")

    logging.critical(email)
    if email:
        return True
    else:
        return False


def normalize_id(this_id):
    try:
        return int(this_id)
    except:
        return this_id


def generate_uuid(n=1, chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"):
    size = n * 10
    return ''.join(random.choice(chars) for _ in range(size))

