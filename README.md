# Group-3 Crypto Lookup

## User Story


Crypto Lookup was built as a colaborative project by students in the 24-week UNC Software Engineering Bootcamp. The assignment came with specific project requirements, listed below in the Acceptance Criteria graphic. With those requirments in mind, we began brain storming ideas, specifically ones where we could find public APIs to gain access to the information we might need. An initial idea suggested was of a page that would return stock info after the user input a specific stock ticker. From this we encountered some difficulties in locating APIs that did not require keys, while this was not a complete roadblock, we felt it best to pivot to try to simplify the task at hand. From this, emerged the idea of building a similar mechanism for looking up Crypto Currencies. While building our wire frame (images included below) we discussed with our TAs the plan for the layout. After reviewing the possible roadblocks in building a search bar that could allow potentially infinite user inputs and how we would try to scope parameters around those searches, we again pivoted. This time, we decided to implement a drop down menu where the user selects from five pre-determined crypto coins to simplify and streamline our design. By doing this, it allowed us to focus on achieving our MVP first, and then come back to future development ideas such as a search bar and scrolling ticker. Once we had a solid wire frame and concept, we began to break the project down in Github Projects. We tried to identify all tasks in their smallest forms and created issues to simplify workflow. Once completed We discussed and assigned people to each task. Finally we built a skeleton template for everyone to work off. The Site presented below in the images and deployment section is our Version 1.0. 




<br>

As someone interested in Crypto Currencies

I want to be able to look up specific coins and see how they are performing. 

I also want to be able to see where I can find more information on these coins, such as Twitter, the coin website, and market cap.

When I search for a coin

Then I am met with infomation that pertains to just that coin

When I leave the page 

Then the page will retain my past searches and field my last search upon reloading the page.

---
## Acceptance Criteria

<strong><p align="center">
Project Requirements
</p></strong>
<p align="center">
    <img src="./assets/guidelines-project1.PNG" alt="Project Guidelines">
</p>

---
## Wire-Frame

<strong><p align="center">
WireFrame - Main Page
</p></strong>

<p align="center">
    <img src="./assets/wireframe-p1.PNG" width="750" height="400" alt="WireFrame-page1">
</p>

<strong><p align="center">
WireFrame - Modal
</p></strong>

<p align="center">
    <img src="./assets/wireFrame-modal.PNG" width="500" height="360" alt="WireFrame-modal">
</p>

---
## Mock-Up
<strong><p align="center">
Mockup-Mobile
</p></strong>


<p align="center">
<img src="./assets/Final-Mobile-Layout.png"width="350" height="1300" alt="mockup-web">
</p>

<strong><p align="center">
Mockup-Web
</p></strong>

<p align="center">
    <img src="./assets/Final-Site-Layout.png"width="" height="" alt="mockup-web">
</p>

<strong><p align="center">
Mockup-Modal
</p></strong>

<p align="center">
    <img src="./assets/modal-deployment.PNG" width="360" height="360" alt="mockup-web">
</p>


---

## Deployment 

[Crypto Lookup](https://a-witthohn.github.io/Group-3-Crypto-Price-Project-1)

[Git Hub Repository](https://github.com/A-Witthohn/Group-3-Crypto-Price-Project-1)


---
## APIs 

Crypto Lookup utilizes two APIs specifically and those APIs are linked below.


The first API is Coin Stats, This API info is displayed in the left box on the webpage and is the top box seen when scrolling on mobile.

[Public API](https://documenter.getpostman.com/view/5734027/RzZ6Hzr3?version=latest)

The second API is CoinCap API 2.0, this info is displayed in the right box on the webpage or the bottom box seen when scrolling on the mobile.

[CoinCap API 2.0](https://docs.coincap.io/#ee0c0be6-513f-4466-bbb0-2016add462e9)

---
## Future Development Ideas 💡


    1. Search Bar Functionality ✅

    2. Create a save info button which then logs information on a seperate html page. This page can be curated by the user to build a collection of only coins that are of interest to them. 

    3. Include a link where users can reach out to the Devs. to suggest how to further improve the site. ✅

    3b. This could be displayed in one of two ways a link that directs the user straight to an email or by a form that the user can also preselect a subject for that email (ex - Subject - New Coin Added , Subject - New Feature Idea) ✅

    4. Build a function in JS using Jquery to set the title and background of the content boxes to sample the colors of the coin searched for a uniform style that changes with each input. 

    5. Find an API that can pull analysis on the coin searched. 

---
## Disclaimer



Crypto Lookup was created strictly as an educational tool. It is not an endorsement of any specific Crypto currencies. The infomation provided is to demonstrate the understanding and potential implementations of concepts in software engineering. Trade at your own risk!


## License


© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
