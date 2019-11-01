#Team preQL - Joseph Lee, Eric "Morty" Lau, and Yevgeniy Gorbachev
#SoftDev1 pd1
#K18 -- Average
#2019-10-10

import sqlite3
DB_FILE='discobandit.db'

db = sqlite3.connect(DB_FILE)
c = db.cursor()

def add_course(course,mark,id):
    c.execute(f'INSERT INTO courses VALUES (\'{course}\',{mark},{id});')


def create_avg():
    data = c.execute('''
        SELECT students.id, students.name
        FROM students; ''')

    #the key is the student's id
    #the value is a array which houses the name, number of classes, and sum of grades
    grades = {id: [name, 0, 0] for id, name in data}

    data = c.execute('''
        SELECT students.id, mark
        FROM courses, students
        WHERE courses.id = students.id;''')

    for id, mark in data:
        grades[id][1] += 1 #number of classes is incremented
        grades[id][2] += mark #sum of grades is incremented

    c.execute('DROP TABLE IF EXISTS stu_avg;')
    c.execute('CREATE TABLE IF NOT EXISTS stu_avg (id numeric, gpa numeric);')

    for id in grades.keys():

        name = grades[id][0]
        gpa = grades[id][2] / grades[id][1]
        c.execute(f'INSERT INTO stu_avg (id, gpa) VALUES ({id}, {gpa});')
        print(f'name: {name}', f'id: {id}', f'average: {gpa}', sep=" // ")

print("Before adding course")
create_avg()
print("\nAfter adding course")
add_course('Rollerblading',90,4)
create_avg()

db.commit()
db.close()
