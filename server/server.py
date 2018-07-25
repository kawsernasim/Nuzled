# [START app]
import logging

# [START imports]
from flask import Flask, render_template, request, url_for
#from flask_pymongo import PyMongo
from pymongo import MongoClient


# [END imports]

# [START create_app]
app = Flask(__name__)
client = pymongo.MongoClient("mongodb+srv://kawser:<Nasim785%21>cluster1-unqcl.gcp.mongodb.net/test?retryWrites=true")
db = client.test
# [END create_app]


# [START form]
@app.route("/")
def form():
    return render_template('index.html')
# [END form]


# [START submitted]
@app.route('/submitted', methods=['POST'])
def submitted_form():
    name = request.form['name']
    email = request.form['email']
    site = request.form['site_url']
    comments = request.form['comments']

    # [END submitted]
    # [START render_template]
    return render_template(
        'submitted_form.html',
        name=name,
        email=email,
        site=site,
        comments=comments)
    # [END render_template]



@app.errorhandler(500)
def server_error(e):
    # Log the error and stacktrace.
    logging.exception('An error occurred during a request.')
    return 'An internal error occurred.', 500
# [END app]



@app.route("/db")
def add():
    online_users = mongo.db.users.find({"online": True})
    return 'added user'


if __name__ == '__main__':
      app.run(host='0.0.0.0', port=8080)