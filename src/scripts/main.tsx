import * as React from "react";
import * as ReactDOM from "react-dom";
import startup from "./startup"

import { WhatIsBumpMail } from "./components/whatis"

startup();

let whatis_masthead = document.getElementById('whatis_masthead');
whatis_masthead.addEventListener('click', function() {
    console.log('clicked');
    ReactDOM.render(
        <WhatIsBumpMail />,
        document.getElementById('main')
    );
})