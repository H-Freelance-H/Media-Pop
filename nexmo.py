import json
from settings import SECRET_SETTINGS

base_url = "https://rest.nexmo.com/sms/json"

api_key = "6af23b68"
api_secret = "a7b2d156"

def send_sms(sender, receiver, code, kind):
	if kind == "RECEIVER":
		text = "The package send by " + sender["name"] + ", is now ready for pickup. Use this PIN to open the locker ("+ code +")"
	elif kind == "sender":
		text = "The Package has been claimed, thank you for using Deppo!."

	payload = {"api_key": api_key, "api_secret": api_secret}
	payload['from'] = "deppo.co"
	payload['to'] = receiver["phone"]
	payload['text'] = text.strip()
	response = urlfetch.fetch(url=base_url, method=urlfetch.POST, payload=json.dumps(payload), headers={"Content-Type": "application/json"}).content

	return response

def send_sms_rpi(transaction, number):
    content = str(transaction)
    json = content.encode("base64", SECRET_SETTINGS["sms_salt"])

    payload = {"api_key": api_key, "api_secret": api_secret}
    payload['from'] = "deppo"
    payload['to'] = number
    payload['text'] = json.strip()
    response = urlfetch.fetch(url=base_url, method=urlfetch.POST, payload=json.dumps(payload), headers={"Content-Type": "application/json"}).content

    return response



def send_sample_sms(text, number):
    payload = {"api_key": api_key, "api_secret": api_secret}
    payload['from'] = "deppo.co"
    payload['to'] = number
    payload['text'] = text.strip()

    headers={"Content-Type": "application/json"}
    r = requests.post(str(base_url), data=json.dumps(payload), headers=headers).text

    return r

