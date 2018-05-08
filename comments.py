import time

f = open("/Data/fincom.txt", 'r')
final = open("finalComm.txt", 'w')
text = []

cap = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",\
		"Q","R","S","T","U","V","W","X","Y","Z",'a', 'b', 'c', 'd', 'e',\
		'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',\
		's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

spaceCounter = 0
charCounter = 0

for line in f:
	new = "> COMMENTS: " + line
	final.write(new)


f.close()
final.close()