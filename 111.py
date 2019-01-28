import sqlite3
conn = sqlite3.connect('db.sqlite3')
cursor = conn.cursor()
cursor.execute("SELECT diameter, weight FROM armatura")
results = cursor.fetchall()
print(results)

input()

