#Joseph Lee
#SoftDev1 pd1
#K10 -- Jinja Tuning
#<2019>-<09>-<23>
import random
from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def hello_world():
    print(__name__)
    print("HELOOOOOOOOOOOO")
    return "No hablo queso!"

@app.route("/occupyflaskst")

def occ_template():
    print(__name__)
    #Turning CSV File into Dictionary
    dict = {}
    csv = open("jobs.csv","r")
    #Split the file by linebreaks into an array of info
    data = open("jobs.csv").read().split("\n")
    #Strip the File so it's only the inner data
    data = data[1:len(data)-2]
    #Loop through the array, split it by comma,
    for item in data:
        input = item.rsplit(",",1)
        dict[input[0].replace('\"','')] = float(input[1])
    csv.close()
    threshold = float(random.randint(1,100))
    random_occ = ""
    for item in dict:
        value = dict[item]
        if (threshold - value <= 0):
            random_occ = item
        else:
            threshold = threshold - value
    return render_template('template.html',title = "Team Seven's Occupation Data", occ = random_occ, dict_jobs = dict)

if __name__ == "__main__":
    app.debug = True
    app.run()
