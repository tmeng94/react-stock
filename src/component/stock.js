import React from "react";
import StockForm from "./form";
import SearchResult from "./result";

let request = require("../util/request");

class Stock extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: {
                files: [],
                nb_results: 0
            }
        };

        this.sendRequest = this.sendRequest.bind(this);
    }

    sendRequest(params) {
        request.searchRequest(params).then(res => {
            console.log(res.data);
            this.setState({data: res.data})
        });
    }

    render() {
        return (
            <React.Fragment>
                <StockForm submit={this.sendRequest} />
                <SearchResult data={this.state.data} />
            </React.Fragment>
        );
    }
}
export default Stock;