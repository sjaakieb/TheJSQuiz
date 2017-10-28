import React from 'react';
import PropTypes from 'prop-types';

export default function Card(props) {
  return (
    <div>
      <div className="mdl-card__title">
        <h4 className="mdl-card__title-text">{props.title}</h4>
      </div>
      <div className="mdl-card__supporting-text">
        <span className="mdl-typography--font-light mdl-typography--subhead">{props.description}</span>
      </div>

      <div className="mdl-card__actions">
        <div className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase">
            View Resource
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
