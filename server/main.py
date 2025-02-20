from flask import Flask, request
from flask_cors import CORS  # Import CORS

# Create an instance of the Flask class
app = Flask(__name__)
CORS(app)
# Define a route for the root URL ("/")
@app.route('/')
def home():
    print("Hello")
    return "Hello, Flask!"


@app.route("/login")
def login():
    username = request.args.get('username')  # Access the 'name' parameter
    password = request.args.get('password')
    print(f"Username: {username}, Password: {password} ")
    return {"username": username, "password": password}  



# Run the app if this script is executed
if __name__ == '__main__':
    app.run(debug=True)
