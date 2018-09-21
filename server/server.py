# [START app]
import logging

# [START imports]
from flask import Flask, render_template, request, url_for, session, redirect
from flask_pymongo import PyMongo

# [END imports]

# [START create_app]
app = Flask(__name__)

# Database config

app.config['MONGO_DBNAME'] = 'nuzled'
app.config['MONGO_URI'] = 'mongodb://admin:Admin785@ds249311.mlab.com:49311/nuzled'

mongo = PyMongo(app)

# [END create_app]


# [START homepage]
@app.route("/")
def form():
    return render_template('index.html')

# [END form]

@app.route('/register', methods = ['GET', 'POST'])
def register():
    return ''

@app.route("/login")
def login():
    return ''

@app.errorhandler(500)
def server_error(e):
    # Log the error and stacktrace.
    logging.exception('An error occurred during a request.')
    return 'An internal error occurred.', 500
# [END app]

if __name__ == '__main__':
      app.run(host='0.0.0.0', port=8080, debug=True)