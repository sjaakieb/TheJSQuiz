import React from 'react';
import PropTypes from 'prop-types';

export default function Card(props) {
  return (
    <div className="card column">
      <div>
        <h4>{props.title}</h4>
      </div>

      <div>
        <span>{props.description}</span>
      </div>

      <div>
        <button>View Resource</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
