#<Frist> <Lsat>
#SoftDev1 pd<p>
#K<n> -- <Title/Topic/Summary>
#<yyyy>-<mm>-<dd>

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
    data = open("jobs.csv").read().split("\n")
    data = data[1:len(data)-2]
    #print(data)
    for item in data:
        input = item.rsplit(",",1)
        #print(input)
        dict[input[0]] = [float(input[1])]
    #print(dict)
    csv.close()
    threshold = float(random.randint(1,100))
    random_occ = ""
    for item in dict:
        value = dict[item][0]
        if (threshold - value <= 0):
            random_occ = ""
        else:
            threshold = threshold - value
    return render_template('template.html',title = "Team Seven's Homepage", occ = random_occ, dict_jobs = dict)

if __name__ == "__main__":
    app.debug = True
    app.run()
