import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('store') @observer
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.setQuizDifficulty = this.setQuizDifficulty.bind(this);
  }

  setQuizDifficulty() {
    this.store.setQuizDifficulty(this.props.difficulty);
  }

  render() {
    return (
      <div className="card column">
        <h4>{this.props.title}</h4>

        <p>{this.props.description}</p>
     
        <Link to="/quiz">
          {this.props.difficulty === this.store.difficulty ? 'Resume Quiz' : 'Start new quiz'} &rsaquo;
        </Link>
      </div>
    );
  }
}
