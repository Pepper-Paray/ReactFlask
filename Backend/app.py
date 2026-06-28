from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/greeting", methods=["GET"])
def greeting():
    return jsonify({"message": "Welcome to the Compliment Generator!"})

@app.route("/api/compliment", methods=["POST"])
def compliment():
    data = request.json
    name = data.get("name", "friend")
    return jsonify({"compliment": f"{name}, you're doing amazing today!"})

if __name__ == "__main__":
    app.run(debug=True)
