# Team Gangganggang - Joseph Lee 
# SoftDev pd9
# K09: Yummy Mongo Py
# 2020-02-28

from json import loads
from pymongo import MongoClient

client  = MongoClient()  # sets up clients
db = client.test # sets up database
restaurants = db.restaurants # restaurants database

# reading json file into database
if (restaurants.count() == 0):
    file = open("primer-dataset.json", "r")
    content = file.readlines()
    for line in content:
        restaurants.insert_one(loads(line))

def select_borough(borough):
    arr = []
    """ Returns all restaurants in a specified borough. """
    for i in restaurants.find({"borough" : borough}):
	       arr.append(i)
    return arr

def select_zipCode(zipCode):
    arr = []
    """ Returns all restaurants in a specified zip code. """
    for i in restaurants.find({"address.zipcode" : zipCode}):
	       arr.append(i)
    return arr

def select_zip_grade(zipcode, grade):
    arr = []
    ''' Returns all restaurants in a specified zip code and with a specified grade.'''
    for i in restaurants.find({"address.zipcode" : zipcode, "grades.grade" : grade}):
	       arr.append(i)
    return arr

def select_zip_score(zipcode, score):
    arr = []
    '''Returns all restaurants in a specified zip code with a score below a specified threshold.'''
    for i in restaurants.find({"address.zipcode": zipcode, "grades.score" : {"$lt" : score}}):
	       arr.append(i)
    return arr

def select_borough_grade(borough, grade):
    arr = []
    '''Returns specified restaurants in borough with given grade.'''
    for i in restaurants.find({"borough" : borough, "grades.0.grade" : grade}):
	       arr.append(i)
    return arr

print("--------------TESTING------------------")
print(select_borough("Staten Island"))
print(select_zipCode("10282"))
print(select_zip_grade("10282", 'A'))
print(select_zip_score("10282", 200))
print(select_borough_grade("Staten Island",'C'))
