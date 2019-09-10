import random
KREWES = {
    'orpheus':['Emily','Kevin','Vishwaa'],
    'rex': ['William', 'Joseph','Calvin'],
    'endymion': ['Grace','Nahi','Derek']
}

def randstudent(crew):
    teams = crew.keys()
    team = teams[random.randrange(0,len(crew))]
    student = crew[team][random.randrange(0,len(crew[team]))]
    return student

def main():
    print(randstudent(KREWES))

main()
