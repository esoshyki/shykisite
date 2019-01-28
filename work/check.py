import sqlite3

conn = sqlite3.connect("metall.db")
cursor = conn.cursor()

cursor.execute("""SELECT title, weight from ugolokr""")
listofall = cursor.fetchall()
jsonn = []
for i in listofall:
    jsonn.append({i[0] : i[1]})
print(jsonn)

conn.close()

