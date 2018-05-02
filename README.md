
# AccioBot

## Authors
* Ali Shazal
* Farzan Ahmad Khan
* Manas Pant

## Brainstorming and Class Presentation

For the final project, Farzan, Manas and I formed a group. We decided to make a chatbot that would answer questions about NYUAD. The inspiration for this is the need that arises every year when the same set of questions are asked on the "Room of Requirements" of NYUAD about the ins and outs of the university. 

Every day dozens of questions are posted on the facebook group and we thought it would be great if we could create a bot that had the ability to learn from the Q/As. In this way, the incoming freshmen and study aways will simply be able to ask the bots all the questions and they will get their answers in no time. 

## Final Project
Finally, we have come up with the chatbot that we wanted to make. It was trained using data from the facebook group "NYUAD Room of Requirement" on which the student population of NYUAD asks a variety of questions ranging from comments on courses to gauging interest for student interest groups and other students respond with help in one way or another. The bot is deployed on a webpage.

# Components

* ## Data Scraping
For the data, we were targeting atleast a 100,000 words combined from both posts and comments in the group. We initially tried using the Facebook API but that approach proved to be unsuccessful. So, we shifted to using javascript and the webpage console instead. Using developer tools, we inspected the markup and found the class names for the post, the post text and the comment text. Then using the data scraping script, we were able to obtain files for comments and posts seperately.

* ## Cleaning Data
   * ### Posts
   The text files downloaded needed to be cleaned. It was raw text joined together that could not be used as it was.
   
   * ### Comments
   sdsd
   * ### Combining Posts & Comments

* ## Training

* ## Testing

## Challenges
1. One of the challenges that we faced was the problem of autoscroll. We tried using autoscroll to go down to enough posts for a satisfactory amount of data but the browser would either crash or stop responding because of too much data loaded. To tackle this problem, we started navigating to specific dates according to months and using key phrases that were recurring in many facebook posts like, "hey." This came up to about 5000/6000 words per iteration so using this we were able to get to our data. 

2. Another problem was that using the strategy above, the comments weren't showing so using the class of the link that shows comments along with javascript, we were were able to expedite the process of loading all of the posts on a page with the comments. This script is included in the comment scraper file. 

3. Another challenge was that every post has multiple comments so we need the comments to be grouped according to the posts in order for it to be trainable data for the bot as the bot will see things as questions and answers. To do this, we added a seperator to the array that the comments were being pushed to so that the data could be cleaned accordingly.



