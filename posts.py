import time

source = open("posts_text (2).txt", 'r')
f = open("pos.txt", 'r+')
final = open("finalPost.txt", 'w')
text = []

cap = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",\
		"Q","R","S","T","U","V","W","X","Y","Z",'a', 'b', 'c', 'd', 'e',\
		'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',\
		's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

spaceCounter = 0
charCounter = 0

for line in source:
	temp = ""
	comma = 0
	capital = 0

	for words in line:
		
		if words == ",":
			comma += 1

		if comma > 0:
			if words in cap:
				capital += 1
				temp += "\n"
				f.write(temp)
				
				temp = ""
				comma -= 1
				capital -= 1

			elif words == " ":
				comma -= 1

		if words == " ":
			spaceCounter += 1
		
		temp += words
		charCounter += 1

for line in f:
	new = "> POST: " + line
	final.write(new)

print("Number of words:", spaceCounter+1)
print("Number of characters:", charCounter)

f.close()
source.close()
final.close()