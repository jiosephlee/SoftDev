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
    return render_template('form.html')

@app.route("/country")
def api():
    print(app)
    choice = urlopen("https://restcountries.eu/rest/v2/name/"+request.args["Countries"])
    json_desc = choice.read();
    country_desc = json.loads(json_desc)[0];
    print(country_desc)
    return render_template('country.html',
                            country = country_desc['name'],
                            capital = country_desc['capital'],
                            region = country_desc['region'],
                            subregion = country_desc['subregion'])

if __name__ == "__main__":
    app.debug = True
    app.run()
