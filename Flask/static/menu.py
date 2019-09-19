from flask import Flask
app = Flask(__name__)

@app.route("/menu")
def hello_world():
    print(__name__)
    print("HELOOOOOOOOOOOO")
    return "No hablo queso!"

if __name__ == "__main__":
    app.debug = True
    app.run()

