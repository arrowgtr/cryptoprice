from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/create-card', methods=['POST'])
def create_card():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        age = request.form['age']

        user_card = {
            'username': username,
            'email': email,
            'age': age
        }

        return jsonify(user_card)

if __name__ == '__main__':
    app.run(debug=True)
