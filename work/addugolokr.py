import sqlite3
ugolokr = []
with open("ugolok-r.txt") as file:
    for line in file:
        ugolok = line.replace(',','.').split()
        title = ugolok[0]
        weight = float(ugolok[1])
        ugolokr.append((title, weight))

conn = sqlite3.connect("metall.db")
cursor = conn.cursor()

cursor.executemany("INSERT INTO ugolokr VALUES (?,?)", ugolokr)
conn.commit()

print("all done...")

input()