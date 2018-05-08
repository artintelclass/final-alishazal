import time
# from itertools import zip, zip_longest

file1name = 'finalComm.txt'
file2name = 'finalPost.txt'

final = open("finalData.txt", 'w')

with open(file1name) as f1, open(file2name) as f2:
    for line1, line2 in zip(f1, f2):
    	final.write(line1)
    	final.write(line2)

final.close()
