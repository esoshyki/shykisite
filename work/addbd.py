import sqlite3
import os

def addbd():
    if "metall.db" not in os.listdir():
        conn = sqlite3.connect('metall.db')
        cursor = conn.cursor()

        conn.execute("""CREATE TABLE ugolokr
                    (title text, weight NUMERIC)""")
        conn.execute("""CREATE TABLE ugolokn
                    (title text, weight NUMERIC)""")
        conn.execute("""CREATE TABLE shveller
                    (title text, weight NUMERIC)""")
        conn.commit()
if __name__ == "__main__":
    addbd()
