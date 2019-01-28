import json
js = []
jsont = {}
with open ('ugolokr.json') as file:
    for line in file:
        row = line.replace(",",".").split()
        jsont.update({row[0] : row[1]})
js.append(jsont)
print(json)
myfile = open("ugolokravn.json", "w")
json.dump(js, myfile)
myfile.close()

