import random
KREWES = {
        'orpheus': ['Emily', 'Kevin', 'Vishwaa', 'Eric', 'ray', 'Jesse', 'Tiffany', 'Amanda', 'Junhee', 'Jackie ', 'Tyler', 'Emory', 'Ivan', 'Elizabeth', 'Pratham', 'Shaw', 'Eric', 'Yaru', 'Kelvin', 'Hong Wei', 'Michael', 'Kiran', 'Amanda', 'Joseph', 'Tanzim', 'David', 'Yevgeniy'],
        'rex': ['William', 'Joseph', 'Calvin', 'Ethan', 'Moody', 'Mo', 'Big Mo', 'Peihua', 'Saad', 'Benjamin', 'Justin', 'Alice', 'Hilary', 'Ayham', 'Michael', 'Matthew', 'Jionghao', 'Devin ', 'David', 'Jacob', 'Will', 'Hannah', 'Alex'],
        'endymion': ['Grace', 'Nahi', 'Derek', 'Jun Tao', 'Connor', 'Jason', 'Tammy', 'Albert', 'Kazi', 'Derek', 'Brandon', 'Kenneth', 'Lauren', 'Biraj', 'Jeff', 'Jackson', 'Taejoon', 'Kevin', 'Jude', 'Sophie', 'Henry', 'Coby', 'Manfred', 'Leia', 'Ahmed', 'Winston']
}

#takes a crew as input and chooses a random group, then chooses a random student from that group
def rand_crew(crew):
    teams = list(crew.keys())
    team = teams[random.randrange(0,len(crew))]
    student = crew[team][random.randrange(0,len(crew[team]))]
    return student

#takes a group name as an input, and chooses a random student from that group
def rand_group(team):
    students = KREWES[team]
    name = students[random.randrange(len(students))]
    return name


def main():
    print("Test One using rand_crew(crew) \n")
    print(rand_crew(KREWES) + "\n")
    print("Test Two using rand_group(orpheus) \n")
    print(rand_group('orpheus') + "\n")

main()
