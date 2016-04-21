"use strict";
import React, {Component} from "react";
import {Form, loader, ValueManager, loaderFactory} from "Subschema";
import subschemaExternalComponentExample from "subschema-external-component-example";
loader.addLoader(subschemaExternalComponentExample);

//schema
const schema = {
    "schema": {
        "title": {
            "type": "ReactSelect",
            "options": [
                {value: 'one', label: 'One'},
                {value: 'two', label: 'Two'}
            ],
            labelKey: "label",
            valueKey: "value"
        },
        "ssn": {
            "type": "MaskedInput",
            "mask": "### ## ###",
            "help":"This is a masked input from react-maskedinput"
        }
    },
    "fieldsets": [
        {
            "legend": "Name",
            "fields": "title, ssn",
            "buttons": [
                {
                    "label": "Cancel",
                    "action": "cancel",
                    "type": "reset",
                    "buttonClass": "btn"
                },
                {
                    "label": "Submit",
                    "action": "submit",
                    "buttonClass": "btn btn-primary"
                }
            ]
        }
    ]
};
const value = {};

//setupTxt


export default class App extends Component {

    handleSubmit = (e, err, value, path) => {
        e && e.preventDefault();
        alert(`Submitting\n ${JSON.stringify(value, null, 2)}`)

    };

    render() {
        return (<div>
                <h3>Subschema External Component Example</h3>
                <p>
                    Checkout src/index.js to show the code required to adapt random
                    react components to Subschema.
                </p>
                <Form schema={schema} value={value} onSubmit={this.handleSubmit} loader={loader}/>
            </div>
        );
    }
}