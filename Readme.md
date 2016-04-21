Subschema external-component-example
===


##Demo
See it in action [here]()

Or run it 

```sh
  git clone 
  cd subschema-external-component-example
  npm install
  npm run hot &
  open http://localhost:8083
```

##Installation
```sh
 $ npm install subschema-external-component-example
``

##Usage
```jsx

 import React, {Component} from 'react';
 import Subschema, {loader, Form} from 'Subschema';
 import subschemaExternalComponentExample from 'subschema-external-component-example';
 
 loader.addLoader(subschemaExternalComponentExample);
 
 //A simple Schema for this demo.
 var schema = {
  "description": "Super basic form, with select and a requied name",
  "schema": {
    "schema": {
      "title": {
        "type": "Select",
        "options": [
          "Mr",
          "Mrs",
          "Ms"
        ]
      },
      "name": {
        "type": "Text",
        "validators": [
          "required"
        ]
      },
      "age": {
        "type": "Number"
      }
    },
    "fieldsets": [
      {
        "legend": "Name",
        "fields": "title, name, age",
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
  },
  "data": {
    "title": "Mrs",
    "name": "Johnson"
  },
  "errors": {
    "name": [
      {
        "message": "Name is already taken"
      }
    ]
  }
}
 
 export default class App extends Component {
 
     render() {
         return <div>
             <h3></h3>
             <Form schema={schema}/>
         </div>
     }
 }


  
```