Subschema External Component Example
====================================
This demo shows how you can integrate 3rd party components into Subschema.
It currently shows 
* [react-maskedinput](https://github.com/insin/react-maskedinput) 
** [react-select](https://github.com/JedWatson/react-select).
  
Both where integrated without any modifications to the original code.

Below is the total code that integrated these.

```jsx
"use strict";
import {loaderFactory, PropTypes} from "Subschema";
import MaskedInput from "react-maskedinput";
import ReactSelect from "react-select";
import 'react-select/dist/react-select.css';
//this is the entry for exporting library.

const loader = loaderFactory();

ReactSelect.propTypes.onChange = PropTypes.valueEvent;
ReactSelect.propTypes.value = PropTypes.value;

loader.addType({
    MaskedInput,
    ReactSelect
});

export default loader;
```


##Demo
See it in action [here](https://subschema.github.io/subschema-external-component-example)

Or run it 

```sh
  git clone  https://github.com/subschema/subschema-external-component-example.git
  cd subschema-external-component-example
  npm install
  npm run hot &
  open http://localhost:8083
```

##Installation
```sh
 $ npm install subschema-external-component-example
``
