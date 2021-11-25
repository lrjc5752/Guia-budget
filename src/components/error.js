import React from 'react';
import PropTypes from 'prop-types';  // para documentar los componentes
const Error = ({mensaje}) => (
    <p className= 'alert alert-danger error'>{mensaje}</p>
);
Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}
export default Error;