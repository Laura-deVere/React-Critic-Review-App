import React from 'react';
import { PropTypes } from 'prop-types';

const Field = (props) => {
	return (
	  <div className="form-fields">
	    <label>{props.label}</label>
	    <input
	     rows="4" cols="50"
	      onChange={props.onChange}
	      type={props.textarea ? 'textarea' : 'text'}
	      value={props.value}
	    />
	  </div>
	)
}

// PropTypes is a way to ensure we are expecting
// certain props that will enable the component to
// function properly.
Field.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textarea: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

Field.defaultProps = {
  textarea: false,
};

export default Field;