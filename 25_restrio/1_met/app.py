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
    artwork = urlopen("https://collectionapi.metmuseum.org/public/collection/v1/objects/436524")
    json_desc = artwork.read();
    artwork_desc = json.loads(json_desc);
    return render_template('home.html',
                            artwork_desc = artwork_desc)

if __name__ == "__main__":
    app.debug = True
    app.run()
