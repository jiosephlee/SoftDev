import random
KREWES = {
    'orpheus':['Emily','Kevin','Vishwaa'],
    'rex': ['William', 'Joseph','Calvin'],
    'endymion': ['Grace','Nahi','Derek']
}

def randstudent(crew):
    team = crew[random.randrange(0,len(crew))]
    student = team[random.randrange(0,len(team))]
    return student

def main():
    print(randstudent(KREWES))

main()
