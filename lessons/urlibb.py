from urllib import request, parse
import sys

myUrl = "http://www.astahov.net"

otvet = request.urlopen(myUrl)

mytext1 = otvet.readlines()

mytext2 = otvet.read()
for line in mytext1:
    print(line)
