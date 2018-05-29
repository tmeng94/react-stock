import React from "react";
import {FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap";
const Consts = require("../util/config");

class StockForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            apiKey: Consts.defaultApiKey,
            integrationName: Consts.defaultIntegrationName,
            keyword: '',
            similarUrl: '',
            limit: 10,
            locale: 'en_US'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    submit() {
        this.props.submit(this.state);
    }

    render() {
        return (
            <form>
                <FormGroup
                    controlId="formBasicText"
                >
                    <ControlLabel>Adobe I/O API key:</ControlLabel>
                    <FormControl
                        type="text"
                        name="apiKey"
                        value={this.state.apiKey}
                        onChange={this.handleChange}
                    />
                    <ControlLabel>Adobe I/O integration name:</ControlLabel>
                    <FormControl
                        type="text"
                        name="integrationName"
                        value={this.state.integrationName}
                        onChange={this.handleChange}
                    />
                    <ControlLabel>Search keyword:</ControlLabel>
                    <FormControl
                        type="text"
                        name="keyword"
                        placeholder="Enter your search keyword here (ignored if an image link is given below)"
                        value={this.state.keyword}
                        onChange={this.handleChange}
                    />
                    <ControlLabel>Search by similar images:</ControlLabel>
                    <FormControl
                        type="text"
                        name="similarUrl"
                        placeholder="Or enter an image link (PNG, JPG or GIF) to find similar assets"
                        value={this.state.similarUrl}
                        onChange={this.handleChange}
                    />
                    <ControlLabel>Number of results:</ControlLabel>
                    <FormControl
                        type="number"
                        name="limit"
                        value={this.state.limit}
                        onChange={this.handleChange}
                    />
                    <ControlLabel>Locale:</ControlLabel>
                    <FormControl
                        componentClass="select"
                        name="locale"
                        value={this.state.locale}
                        onChange={this.handleChange}
                    >
                        <option value="en_US">English (United States)</option>
                        <option value="ja_JP">Japanese</option>
                    </FormControl>
                    <Button
                        onClick={(e) => this.submit()}
                    >Search</Button>
                </FormGroup>
            </form>
        );
    }
}
export default StockForm;