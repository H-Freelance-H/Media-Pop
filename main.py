import webapp2, jinja2, os, sys, ast
from webapp2_extras import routes
from models import ShortCutKey
import json as simplejson
import logging
import urllib
import urllib2
import httplib
import time
import uuid
import nexmo
import datetime, random, string
import hashlib
import hmac
import base64

import base64
# from functions import *
from google.appengine.api import urlfetch
from google.appengine.ext import ndb
from settings import SETTINGS
from settings import SECRET_SETTINGS
from settings import SAFEBOX_LOCATIONS
from settings import DEPPO
from settings import THIS_RESPONSE
# from settings import RAYGUN_API_KEY
# from raygun4py import raygunprovider

# logger = logging.getLogger("mylogger")
# rgHandler = raygunprovider.RaygunHandler(RAYGUN_API_KEY)
# cl = raygunprovider.RaygunSender(RAYGUN_API_KEY)
# logger.addHandler(rgHandler)


jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.dirname(__file__)), autoescape=True)




class BaseHandler(webapp2.RequestHandler):
    def __init__(self, request=None, response=None):
        self.now = datetime.datetime.now()
        self.ajax_response = THIS_RESPONSE.copy()
        self.tv = {}        
        self.settings = SETTINGS.copy()        
        self.initialize(request, response)        
        self.tv["version"] = os.environ['CURRENT_VERSION_ID']
        self.local = False        

        self.session = self.get_session()
        self.user = self.get_current_user()


    def render(self, template_path=None, force=False):
        template = jinja_environment.get_template(template_path)
        self.response.out.write(template.render(self.tv))
        logging.debug(self.tv)


    def get_session(self):
        from gaesessions import get_current_session
        return get_current_session()


    def get_current_user(self):
        if self.session.has_key("user"):
            user = User.get_by_id(self.session["user"])
            return user
        else:
            return None




class ErrorHandler(BaseHandler):
    def get(self, page):
        self.tv["current_page"] = "ERROR"
        self.render('frontend/dynamic404.html')

class FrontPage(BaseHandler):
    def get(self):

        keys = ShortCutKey.query().fetch(100)
        self.tv['keys'] = keys

        logging.critical("hello world")
        logging.critical(keys)
        
        self.tv["current_page"] = "FRONT"
        self.render('frontend/index.html')

    def post(self):
        if self.request.get('shortCutKeys') and self.request.get('description'):
            key = self.request.get('shortCutKeys')
            desc = self.request.get('description')

            logging.critical(key)
            logging.critical(desc)

            keys = ShortCutKey(id=key.upper())
            keys.keys = key
            keys.description = desc
            

            keys.put()

            keys = ShortCutKey.query().fetch(100)
            self.tv['keys'] = keys

            logging.critical("hello world")
            logging.critical(keys)

            self.tv["error"] = "Please enter your email and password."
            self.tv["current_page"] = "FRONT"
            self.render('frontend/index.html')




site_domain = SETTINGS["site_domain"].replace(".","\.")

app = webapp2.WSGIApplication([
    routes.DomainRoute(r'<:' + site_domain + '|localhost|' + SETTINGS["app_id"] + '\.appspot\.com>', [
        
        webapp2.Route('/', handler=FrontPage, name="www-front"),                
        

        webapp2.Route(r'/<:.*>', ErrorHandler)
    ])
])

# if RAYGUN_API_KEY:
#     app.error_handlers[500] = log_exception
#     app.error_handlers[405] = log_404#     app.error_handlers[404] = lo
