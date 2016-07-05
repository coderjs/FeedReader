# Project Overview

In this project Udacity FEND students are given a web-based application that reads RSS feeds. 
The file has incomplete or missing Jasmime tests scripts written. 
The objective for students was to complete or compose new test suites. 

# How to Run the Application
You can click this link (http://coderjs.github.io/FeedReader) to open a browser window and inspect the Jasmine results (at the bottom).
Or, you can download this guthub repository (https://github.com/coderjs/FeedReader) to your local machine and run "index.html" in a browser. 
To specifically inspect the jasmine tests written for this project, open the file "/jasmine/spec/feedreader.js" in a text editor. 

## Project Significance

Testing is an critical part of the software development process. 
Many organizations practice a standard of development known as "test-driven development (TDD)". 
This is when developers write tests first, and only then write the application code to pass the test.

## What will learned?

In this project I learned how to use Jasmine (v2.1.2) to write a number of tests against a pre-existing application. 
I used Jasmine components such as suites, expectations, specs, matchers, and Asynchronous Support.
The code composed tests the underlying business logic of the application as well as the event handling and DOM manipulation.
Here is the link to documentation for the version of Jasmine we used (http://jasmine.github.io/2.1/introduction.html).

## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript.
* Good tests provide the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

## Attribution
In this project I referenced the following sources: 
* Udacity lessons
* Udacity Forums
* Jasmine website (http://jasmine.github.io/)
* Stack Overflow
* http://www.w3schools.com/
* https://learn.jquery.com
* Mozilla Developer Network
* JSFiddle
* Multiple Jasmine websites and tutorials (found via Google search)

# Specific Project Requirements

Below are the specific requirement of this project that were completed. 

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass. 
21. Write a README file detailing all steps required to successfully run the application. 