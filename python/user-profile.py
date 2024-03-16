# user-profile.py
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/user-profile.php')
def user_profile():
    user_data = {
        'username': 'JohnDoe',
        'email': 'john@example.com',
        'age': 30
    }
    return jsonify(user_data)

if __name__ == '__main__':
    app.run(debug=True)
