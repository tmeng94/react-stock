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
                        // ref={(input) => this.setState({apiKey: input.value})}
                    />
                    <ControlLabel>Adobe I/O integration name:</ControlLabel>
                    <FormControl
                        type="text"
                        name="integrationName"
                        value={this.state.integrationName}
                        onChange={this.handleChange}
                        // ref={(input) => this.setState({integrationName: input.value})}
                    />
                    <ControlLabel>Search keyword:</ControlLabel>
                    <FormControl
                        type="text"
                        name="keyword"
                        placeholder="Enter your search keyword here"
                        value={this.state.keyword}
                        onChange={this.handleChange}
                        // ref={(input) => this.setState({keyword: input.value})}
                    />
                    <ControlLabel>Number of results:</ControlLabel>
                    <FormControl
                        type="number"
                        name="limit"
                        value={this.state.limit}
                        onChange={this.handleChange}
                        // ref={(input) => this.setState({limit: input.value})}
                    />
                    <ControlLabel>Locale:</ControlLabel>
                    <FormControl
                        componentClass="select"
                        name="locale"
                        value={this.state.locale}
                        onChange={this.handleChange}
                        // ref={(input) => this.setState({locale: input.value})}
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