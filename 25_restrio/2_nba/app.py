#Joseph Lee and Jesse "Mcree" Chen
#SoftDev1 pd1
#K24 -- A RESTful Journey Skyward
#2019-11-13
from flask import Flask, render_template, request, redirect, url_for
import json
from urllib.request import urlopen
app = Flask(__name__)

@app.route("/")
def home():
    print(app)
    team = urlopen("https://www.balldontlie.io/api/v1/teams/3")
    json_desc = team.read();
    team_desc = json.loads(json_desc);
    return render_template('home.html',
                            team_desc = team_desc
                            )

if __name__ == "__main__":
    app.debug = True
    app.run()
