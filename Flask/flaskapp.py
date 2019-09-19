from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello_world():
    print(__name__)
    print("HELOOOOOOOOOOOO")
    return "No hablo queso!"

@app.route("/<name>")
def hello_world_name(name):
    print(__name__)
    print("HELOOOOOOOOOOOO")
    return "No hablo queso " + name + "!"

@app.route("/rude")
def hello_world_rude():
    print(__name__)
    print("HELOOOOOOOOOOOO")
    return "fuck off"

if __name__ == "__main__":
    app.debug = True
    app.run()
