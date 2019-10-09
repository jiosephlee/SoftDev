from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def hello_world():
    print(__name__)
    print("HELOOOOOOOOOOOO")
    return "No hablo queso!"

coll = [0,1,1,2,3,5,8]

@app.route("/my_foist_template")
def test_templt():
    print(__name__)
    return render_template('stub.html',foo = "fooo",collection = coll)

@app.route("/<name>")
def hello_world_name(name):
    print(__name__)
    print("HELOOOOOOOOOOOO")
    return "No hablo queso " + name + "!"

if __name__ == "__main__":
    app.debug = True
    app.run()
