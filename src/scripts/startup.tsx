import * as React from "react";
import * as ReactDOM from "react-dom";
import { HomePage } from "./components/home"


export default function initialize() {
    ReactDOM.render(
        <HomePage />, document.getElementById('main')
    );
}

