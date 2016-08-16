import * as React from "react";
import * as ReactDOM from "react-dom";
import startup from "./startup"
import { HomePage } from "./components/home";

import { WhatIsBumpMail } from "./components/whatis";
import * as utils from "./utils/utils";

//Initialize the homepage
startup();

//Switch to "WhatIsBumpMail?"
let whatis_masthead = document.getElementById('whatis_masthead');
whatis_masthead.addEventListener('click', function() {
    utils.hideClass('masthead');
    ($ as any)('.fixed.menu').transition('fade in');
    document.getElementById('topMenu').classList.remove('hidden');
    document.getElementById('topMenu_home').classList.remove('active');
    document.getElementById('topmenu_whatis').classList.add('active');
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