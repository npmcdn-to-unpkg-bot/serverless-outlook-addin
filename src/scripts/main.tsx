import * as React from "react";
import * as ReactDOM from "react-dom";
import startup from "./startup"
import { HomePage } from "./components/home"

import { WhatIsBumpMail } from "./components/whatis"

//Initialize the homepage
startup();

//Switch to "WhatIsBumpMail?"
let whatis_masthead = document.getElementById('whatis_masthead');
whatis_masthead.addEventListener('click', function() {
    
    ReactDOM.render(
        <WhatIsBumpMail />,
        document.getElementById('main')
    );
})

//Switch to "Home"
let home_masthead = document.getElementById('home_masthead');
home_masthead.addEventListener('click', function() {
    console.log('clicked');
    ReactDOM.render(
        <HomePage />,
        document.getElementById('main')
    );
})