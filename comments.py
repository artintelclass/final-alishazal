import time

# source = open("comments_text.txt", 'r')
f = open("fincom.txt", 'r')
final = open("finalComm.txt", 'w')
text = []

cap = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",\
		"Q","R","S","T","U","V","W","X","Y","Z",'a', 'b', 'c', 'd', 'e',\
		'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',\
		's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

spaceCounter = 0
charCounter = 0

# for line in source:
# 	temp = ""
# 	nCount = 0
# 	comma = 0
	
# 	for words in line:
# 		charCounter += 1

# 		if nCount > 0:
# 			if words == ",":
# 				temp += "\n" 
# 				f.write(temp)
# 				temp = ""
# 				nCount = 0

# 			else:
# 				nCount = 0

# 		if words == "n":
# 			nCount += 1

# 		if words == " ":
# 			spaceCounter += 1

# 		temp += words

for line in f:
	new = "> COMMENTS: " + line
	final.write(new)


# print("Number of words:", spaceCounter)
# print("Number of characters:", charCounter)

f.close()
# source.close()
final.close()