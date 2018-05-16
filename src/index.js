import React from "react";
import ReactDOM from "react-dom";
import Stock from "./component/stock"

let request = require("./util/request");

const Index = () => {
    return <div>
        <Stock />
    </div>;
};


ReactDOM.render(<Index />, document.getElementById("index"));