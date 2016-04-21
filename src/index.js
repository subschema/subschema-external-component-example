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