import random

def randomizer(dict):
    threshold = float(random.randint(1,100))
    for item in dict:
        value = dict[item][0]
        if (threshold - value <= 0):
            return item
        else:
            threshold = threshold - value

def main():
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

    print(randomizer(dict))

main()
