from google.appengine.ext import ndb
import time
import logging


class ShortCutKey(ndb.Model):
    created = ndb.DateTimeProperty(auto_now_add=True)
    updated = ndb.DateTimeProperty(auto_now=True)
    keys = ndb.StringProperty()
    keys_code = ndb.StringProperty()
    description = ndb.StringProperty()

    def to_object(self):
        details = {}
        details["created"] = int(time.mktime(self.created.timetuple()))
        details["updated"] = int(time.mktime(self.updated.timetuple()))
        etails["keys"] = self.keys
        details["description"] = self.description
        details["key"] = self.key.urlsafe()









