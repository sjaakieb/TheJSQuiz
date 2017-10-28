import React from 'react';
import PropTypes from 'prop-types';

export default function MessageBox(props) {
  return (
    <div className={`message-box message-box-${props.color}`}>
      <div className="text">
        <span dangerouslySetInnerHTML={{ __html: props.character }} /> {props.title}
      </div>
    </div>
  );
}

MessageBox.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
