# AccioBot 

![AccioBot](https://github.com/artintelclass/final-alishazal/blob/master/photos/web.png)

## Authors
* Ali Shazal
* Farzan Ahmad Khan
* Manas Pant

## Brainstorming and Class Presentation

For the final project, Farzan, Manas and I formed a group. We decided to make a chatbot that would answer questions about NYUAD. The inspiration for this is the need that arises every year when the same set of questions are asked on the "Room of Requirements" of NYUAD about the ins and outs of the university. 

Every day dozens of questions are posted on the facebook group and we thought it would be great if we could create a bot that had the ability to learn from the Q/As. In this way, the incoming freshmen and study aways will simply be able to ask the bots all the questions and they will get their answers in no time. 

## Final Project
Finally, we have come up with the chatbot that we wanted to make. It was trained using data from the facebook group "NYUAD Room of Requirement" on which the student population of NYUAD asks a variety of questions ranging from comments on courses to gauging interest for student interest groups and other students respond with help in one way or another. We used [Pender's bot](https://github.com/pender/chatbot-rnn) for the project. The bot is deployed on a webpage.

# Components

* ## Data Scraping
For the data, we were targeting atleast a 100,000 words combined from both posts and comments in the group. We initially tried using the Facebook API but that approach proved to be unsuccessful. So, we shifted to using javascript and the webpage console instead. Using developer tools, we inspected the markup and found the class names for the post, the post text and the comment text. Then using the data scraping script, we were able to obtain files for comments and posts seperately. Most of the project time was spent in data scraping because there were many hiccups in the process.
Following is the script that we used:

![Data Scraper](https://github.com/artintelclass/final-alishazal/blob/master/photos/scraperCode.png)

* ## Cleaning Data
   * ### Posts
   The text files downloaded needed to be cleaned. It was raw text joined together that could not be used as it was.
   We wrote a python script to clean it. I have uploaded the scripts in this repo. Before cleaning, the comments were like        this:
   
   ![Raw Posts](https://github.com/artintelclass/final-alishazal/blob/master/photos/rawPost.png)
   
   After running the script, they became like this:
   
   ![Cleaned Posts](https://github.com/artintelclass/final-alishazal/blob/master/photos/finalPost.png)
   
   * ### Comments
   Similarly, the comments were all also joined. The easier thing about comments was that there was a "new_post" between each set of comments. So, I downloaded NotePad++ and replaced all instances of "new_post" to "\r". Then, I raw a python script to take it out in its final form that could be used for training. 
   Before cleaning:
   
   ![Raw Comments](https://github.com/artintelclass/final-alishazal/blob/master/photos/rawComm.png)
   
   After cleaning:
   
   ![Cleaned Comments](https://github.com/artintelclass/final-alishazal/blob/master/photos/finalComm.png)
   
   * ### Combining Posts & Comments
   
   Finally, I simply combined the posts and comments using another python script, which gave the following output:
   
   ![Script](https://github.com/artintelclass/final-alishazal/blob/master/photos/combine.png)
   
   ![Ready Data](https://github.com/artintelclass/final-alishazal/blob/master/photos/finalData.png)

* ## Training
Training took at least 12 hours. The time could have been less if we had been able to find a suitably fast computer earlier. The computers provided for the class were not available for one reason or another, and our laptops were simply very slow. I ssh'ed into the computer of a friend in Panama and ran the training code there. What took 60 seconds for 1 epoch on the class computer and my laptop took 2 seconds on his computer because he had 2 GPUs.



* ## Testing
I stopped the training at intervals to check the progress of learning of the bot.
It started from here:

![Test](https://github.com/artintelclass/final-alishazal/blob/master/photos/test.jpeg)

And it reached:

![Final](https://github.com/artintelclass/final-alishazal/blob/master/photos/finalBot.png)

## Web Development

Web development was actually a lot more challenging than what we imagined it to be. None of us had ever deployed a Python application on a website before. The first step was to have a basic front end website where the user could write their message or ask something to the Bot. The challenge was then to send this data to the chatbot.py file as the input and then let the python file process it. Then we would need the output from the python file so that we could use it in our html.

Based on research we found out that Flask is a micro framework that helps in accomplishing such tasks. We started by going through a flask tutorial because even though we had a basic template it was not enough to understand the technicalality behind it and make changes. We also had to make changes in the chatbot.py file so that it works with the web. The file initially had a main function with no arguments that would be called to run the entire program. We had to change a huge portion of the file for the main() to take a string argument that is the input. So after the changes we created a function main(input_from_html) that basically After going through this we imported our chatbot.py to the server. 

Once that was done, we only had to call this function with the input value of the index.html. The next step was to clean the output data because all the words came in a list. So, we joined that and got a clean string that was then converted into json which then we used jQuery to put the text in our index.html.

## Challenges

1. One of the major challenges that we faced was the problem of autoscroll. We tried using autoscroll to go down to enough posts for a satisfactory amount of data but the browser would either crash or stop responding because of too much data loaded. To tackle this problem, we started navigating to specific dates according to months and using key phrases that were recurring in many facebook posts like, "hey." This came up to about 5000/6000 words per iteration so using this we were able to get to our data. 

2. Another problem was that using the strategy above, the comments weren't showing so using the class of the link that shows comments along with javascript, we were were able to expedite the process of loading all of the posts on a page with the comments. This script is included in the comment scraper file. 

3. Another challenge was that every post has multiple comments so we need the comments to be grouped according to the posts in order for it to be trainable data for the bot as the bot will see things as questions and answers. To do this, we added a seperator to the array that the comments were being pushed to so that the data could be cleaned accordingly.
