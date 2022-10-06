import React from 'react';
import PropTypes from 'prop-types';

const Landing = ({name}) => {
    return (
        <div>
            {name} component
        </div>
    );
};

Landing.propTypes = {
    name: PropTypes.string.isRequired
};

export default Landing;