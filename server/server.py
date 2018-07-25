# [START app]
import logging

# [START imports]
from flask import Flask, render_template, request, url_for

# [END imports]

# [START create_app]
app = Flask(__name__)
# [END create_app]


# [START form]
@app.route("/")
def form():
    return render_template('index.html')
# [END form]



@app.errorhandler(500)
def server_error(e):
    # Log the error and stacktrace.
    logging.exception('An error occurred during a request.')
    return 'An internal error occurred.', 500
# [END app]

if __name__ == '__main__':
      app.run(host='0.0.0.0', port=8080)