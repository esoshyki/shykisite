string = "$(\'<a class=\"dropdown-item\" name = \"{}\" id=\"{}\">{}</a>\').appendTo(\'#dropkvadrat\');"
myfile = open("kvadrat.txt", "a")
with open ("ds.txt") as file:
    for line in file.readlines():
        linee = line.replace(",",".").replace("?","x").split()
        ugolok = linee[2] + linee[3]
        weight = linee[-2]
        
        newstring = string.format(weight, ugolok, ugolok)
        myfile.write(newstring + "\n")
myfile.close()
        
