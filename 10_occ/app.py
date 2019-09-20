from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def hello_world():
    print(__name__)
    print("HELOOOOOOOOOOOO")
    return "No hablo queso!"

@app.route("/occupyflaskst")
def test_templt():
    print(__name__)
    return render_template('template.html',title = "Team Seven's Homepage")

if __name__ == "__main__":
    app.debug = True
    app.run()
