# [START app]
import logging

# [START imports]
from flask import Flask, render_template, request, url_for, session, redirect, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS

# [END imports]

# [START create_app]
app = Flask(__name__)



# Database config

app.config['MONGO_DBNAME'] = 'nuzled'
app.config['MONGO_URI'] = 'mongodb://admin:Admin785@ds249311.mlab.com:49311/nuzled'
app.config['DEBUG'] = True
app.config['TESTING'] = True

mongo = PyMongo(app)

# @app.route('/users', methods=['GET'])
# def get_all_user():
#     users = mongo.db.users

#     output = []

#     for q in users.find():
#         output.append({'name': q['name']})

#     return jsonify({'result' : output})
    
# @app.route('/users/<name>', methods=['GET'])
# def get_one_user(name):
#     users = mongo.db.users

#     q = users.find_one({'name:' : name})

#     if q:
#         output = {'name' : q['name']}
#     else:
#         output = 'No results found'

#     return jsonify({'result' : output})

@app.route('/register', methods=['POST'])
def add_user():
      users = mongo.db.users

      firstname = request.json['firstname']
      lastname = request.json['lastname']
      email = request.json['email']
      password = request.json['password']
      gender = request.json['gender']

      users.insert({'firstname' : firstname, 'lastname' : lastname, 'email' : email, 'password' : password, 'gender' : gender})
      
      return "added"

if __name__ == '__main__':
      app.run(host='localhost', port=8080, debug=True)