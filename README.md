# VenusHack 2023

## ZotnFound
<p>A platform designed for UCI students, allowing them to effortlessly locate and recover lost or found items, ensuring their safe return.</p>
<img src="https://cdn.discordapp.com/attachments/918312671533727855/1113210954075865209/Untitled_design_1.png" width="210px"/>

<p>Follow Us at: https://www.instagram.com/zotnfound/</p>
<img src="https://cdn.discordapp.com/attachments/688278789566103604/1113211583905153066/image.png" width="500px"/>


## Table of Contents
+ [Inspiration](#inspiration)<br>
+ [How It Works](#how-it-works)<br>
  + [Login](#login)<br>
  + [Home](#home)<br>
+ [How We Built It](#how-we-built-it)<br>
+ [Challenges We Faced](#challenges-we-faced)<br>

## Inspiration
Many people are constantly losing their belongings, whether that be their phones, keys, or watter bottles. This is especially true for UCI students on the UCI subreddit, where there are countless posts being created about lost and found items. Due to this problem, we decided to take matters into our own hands and created an Instagram account to help lost items return back to their original owners. We have so far helped over 10 people and gained over 300+ followers. The process on Instagram was very time consuming due to us having to manually go through each message and create a post on each individual item that was sent. Due to these restraints, we decided to create a platform that will allow people to post items that they found and lost. These posts had descriptions on the item and where they were last seen.

## How It Works
There are currently two pages to the website: Login and Home.
### Login
Upon entering our website, the user will be greeted with a login page where they are able to create an account with a UCI email and sign in.
### Home
This is where all the functionality of ZotnFound is. On the center of the page is a map that has all the locations of each item that has been found or lost. These items are indicated through their unqiue icons which act as markers and colors, with red representing "lost" and blue representing "found". Users are able to interact with the map such as dragging and zooming in/out. Upon clicking on any marker, it will show up a display of the item with its descriptions such as what the item is and when it was created, a tag indiciating that it's either lost or found, a contact button, and a delete button. The delete button will only show up on items that the user has created, which ensures that no items get deleted if they not been returned to the owner yet. On the right side of the homepage is a results panel which will showcase all the items as a small card which makes it easier for users to quickly identify whether or not their items are there. The results could be filtered out with the search bar on the top of the page. Users are able to type the item that they are currently looking for into the search bar and the results panel will update depending on what the user types. The results could be filtered out even more with the filtering panel on the letf side of the screen. The panel includes two switches, one for each lost and found, a section for the user to check off what type of item they are looking for, and a date selection. Under the filtering panel is a create marker button; when the user clicks on this button a form will pop up with multiple sections for users to input such as an image upload, type of item, name of the item, whether it's lost or found, and a description of the item. Once everything has been filled out, the user will be able to press on continue which will bring them back to the map with a brand new marker created on the location that they are currently at. They are then able to move the marker to the exact location that the found/lost the item and click on it once more to confirm its location. This will create a brand new icon for the item that the just posted on the map.

## How We Built It
The web app consists React, HTML, CSS, JS for the frontend. While using Express, Nodemailer, and MongoDB for the backend. We created a database using MongoDB which stores all the information that the post form provides. Through this database, we are able to get the information about the owner's contact information which we will use with nodemailer to send individual emails with verification links about the donated item.

## Challenges We Faced
There were many challenges we faced when building this website. Everything we used to create the web app was new to many of us, and we only had four days to learn all of it before submitting the project. There were many ideas that were brilliant such as creating an account system to verify each item and having a proper way to communicate with the owner through private messages, however time was very limited and we all had little to no experience, so we srapped the idea and went for the email feature. Even though there were many challenges, we were able to overcome each one and in the end completed a web app that we are proud of sharing.
