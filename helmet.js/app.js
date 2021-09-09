// Require express
const express = require('express');
const app = express();

// npm install helmet or to install a specific version, I'll use npm install helmet@3.21.3
let helmet = require('helmet');


// The 'helmet.hidePoweredBy() will remove the 'X-Powered-By' header
// You can use this
helmet.hidePoweredBy();
// Or this
app.use(helmet.hidePoweredBy());
// They are the same thing


// Your page can be put into an frame> or <iframe> without your consent.
// This results in a clickjacking attack. 
// Clickjacking is the tecnique of tricking a user into interacting with a page different from what the user thinks it is.
app.use(helmet.frameguard({action: 'deny'}))

// Cross Site scripting is another way of attacking web pages
// Scripts are placed into vulnerable pages, for the purpose of stealing sensitive data like session cookies.
// A Session cookie stores your login credentials everytime you open a browser and visit it
// This is a way to 'sanitize' all of the users input coming into your page from outside.

helmet.xssFilter()

