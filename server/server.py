# [START app]
import logging

# [START imports]
from flask import Flask, render_template, request, url_for, session, redirect, jsonify
from flask_pymongo import PyMongo

# [END imports]

# [START create_app]
app = Flask(__name__)

# Database config

app.config['MONGO_DBNAME'] = 'nuzled'
app.config['MONGO_URI'] = 'mongodb://admin:Admin785@ds249311.mlab.com:49311/nuzled'

mongo = PyMongo(app)

@app.route('/register', methods=['POST'])
def add_user():
    users = mongo.db.users

    name = request.json['name']

    user_id = users.insert({'name' : name})

if __name__ == '__main__':
      app.run(host='localhost', port=8080, debug=True)