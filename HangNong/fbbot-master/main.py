import unittest
import nose
import sys

from facebook import FacebookClient

class MainClass(object):
    def run(self,user,passw):
        try:
            self.client = FacebookClient()
            res = self.client.login(user,passw)
            print res["access_token"]
        except Exception, e:
            print 0
if __name__ == '__main__':
    if len(sys.argv) == 1 or len(sys.argv) != 3:
        print 0
    else:
        MainClass().run(sys.argv[1],sys.argv[2])
