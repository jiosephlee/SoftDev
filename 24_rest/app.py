#Joseph Lee
#SoftDev1 pd1
#K24 -- A RESTful Journey Skyward
#2019-11-13
from flask import Flask, render_template, request, redirect, url_for
import json
from urllib.request import urlopen
app = Flask(__name__)

@app.route("/")
def api():
    print(app)
    pic = urlopen("https://api.nasa.gov/planetary/apod?api_key=AHI3lH5etq8bS13rrGMcob6fwys5CQiTLfFUiJJe")
    json_desc = pic.read();
    pic_desc = json.loads(json_desc);
    return render_template('api.html',
                            pic = pic_desc['url'],
                            date = pic_desc['date'],
                            caption = pic_desc['explanation'])


if __name__ == "__main__":
    app.debug = True
    app.run()
