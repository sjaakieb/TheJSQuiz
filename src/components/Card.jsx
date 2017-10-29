import React from 'react';
import PropTypes from 'prop-types';

export default function Card(props) {
  return (
    <div className="card column">
      <h4>{props.title}</h4>

      <p>{props.description}</p>

      <a className="btn" href={props.link} target="_blank">View Resource</a>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
