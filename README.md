# Important Note 2022/01/27

The NASA APOD API is now returning a status code of `500 INTERNAL SERVER ERROR` for every single one of my requests. I am unsure of how long this has been going on for or what is causing it.


# This Project Is Hosted On Netlify

https://focused-lumiere-d23ffa.netlify.app/

# Getting Started

## Dev Requirements

- An API key from [NASA](https://api.nasa.gov/)
- A .env file with a value of `API_KEY="Your key here"`
- The Netlify CLI `npm install netlify-cli -g` 

## Run Project

`netlify dev`

Starts server on http://localhost:8888/


# Technical Overview

## Tech Stack

For this project I decided to use React and Netlify. I chose to use React for the reuseable components, ecosystem, and it's ease of use. I chose Netlify because it pairs well with the SPA architecture. Also, the lambda function support allowed me to keep my api key secure.

## Things I Learned

During this project I learned how to use useContext to pass state between React components and to avoid prop drilling. I learned how to use CSS modules to avoid namespace collisions and to use them as objects. While I have written backend code with Express.js and Rocket.rs in the past lambda functions were completely new to me. This is also the first time I used FontAwesome.

## Features Cut Due To Time Constraints

Infinite scrolling - Ran into some nasty bugs with the bottom of the page inconsitently being detect. It was taking up too much time to debug so I implemnted a simple button instead.
I attempted to add infinite scrolling on two occasions. On the first attempt I used an event listener on scroll and on the second I used the intersection observer API. Both attempts resulted in either infinitely detecting or not detecting the bottom of the page. Unfortunately it was taking too much time to debug so I scrapped the idea for a button instead.

I would have liked to implement a unique page specifically to display one singular post. This page could be accessed in two ways. The first way would be by clicking on a post on the main page. The second way would be by having the share button copy a unique url which could be shared. This page would have the post enlarged for better visibility and potientially a comment section. I believe that this could be achieved with the React Router library.

The accessibility features and html semantics could certainly be improved as it is something I am still learning.

While for the most part I am happy with the CSS, there is always room for improvement. Perhaps I would get better results using a UI library such as Chakra UI or Materialize.

I will continue working on this project to add these features in the future. These features will be implemented on the `latest` branch in case modifying the project after the submission date is prohibited.
