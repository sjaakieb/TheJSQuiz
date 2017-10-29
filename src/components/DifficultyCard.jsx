import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

@inject('store') @observer
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.setQuizDifficulty = this.setQuizDifficulty.bind(this);
  }

  setQuizDifficulty(e) {
    e.preventDefault();
    this.store.setQuizDifficulty(this.props.difficulty);
  }

  render() {
    return (
      <div className="card column">
        <h4>{this.props.title}</h4>

        <p>{this.props.description}</p>

        <div onClick={e => this.setQuizDifficulty(e)}>
          <Link to="/quiz" className="btn" title={this.props.title.toLowerCase()      }>
            {this.props.difficulty === this.store.difficulty ? 'Resume Quiz' : `Start ${this.props.title.toLowerCase()} quiz`} &rsaquo;
          </Link>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
