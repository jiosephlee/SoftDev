import sqlite3

db = sqlite3.connect("foo")

c= db.cursor()

c.execute("CREATE TABLE roster(name TEXT, userid INTEGER)")

db.commit()
db.close()
