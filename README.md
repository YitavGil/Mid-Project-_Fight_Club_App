# Mid-Project-_Fight_Club_App

<a href="https://ibb.co/zSqtBJv"><img src="https://i.ibb.co/K9T8fwv/Fight.png" alt="Fight" border="0"></a>


See the website: https://infallible-lichterman-1c199e.netlify.app/

To log in into the app you can enter any name you want.
The email must be: admin@admin.com
Password: 12345

### Features: 
* Each to the webstie pages has its own component.
* The home page was designed to mimic the main page of the Tinder app. The slide effect was achived by installing the external library "react tinder card"
* Since this is a front-end project without real users database, the user can only be "matched" with popular super-heroes from the Superheros API.
* Matched super heroes are saved in the "maches" page represented by the fist-icon. The user can see his opponent's stats and remove the match.
* The user can update his personal stats in the profile page (skull icon).
* User can create public brawl events in the "Events" page.

### Technology used:
* React hooks
* React routers
* Context API
* sass

#### Issues:
* "Fights near me" feature was supposed to show the geo-location of the fights. This feature was removed due to the expiration of the api key.
* When adding multiple events, the events are stacking to the top instead of the bottom.
