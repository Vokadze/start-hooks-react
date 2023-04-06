import React from "react";
import PropTypes from "prop-types";

const Child = ({ count, values }) => {
    return (
        <div>
            <div>Count: {count}</div>
            <div>Почта: {values.email}</div>
        </div>
    );
};

Child.propTypes = {
    count: PropTypes.number,
    values: PropTypes.object
};

export default Child;
