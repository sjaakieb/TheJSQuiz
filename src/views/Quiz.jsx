import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'prismjs';

// Custom components
import Header from '../components/Header';
import MessageBox from '../components/MessageBox';

@inject('store') @observer
export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.renderQuestions = this.renderQuestions.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
  }

  componentWillMount() {
    // If difficulty has not been set redirect to Home
    if (this.store.difficulty === undefined) {
      this.props.history.push('/');
    }

    this.redirectAfterQuizEnded();
  }

  componentDidUpdate() {
    this.redirectAfterQuizEnded();
  }

  answerQuestion(question, e) {
    // Do not allow to click incorrect answer more than once
    if (e.currentTarget.classList.contains('incorrectAnswer')) {
      return;
    }
    const answer = this.store.answerQuestion(question);

    if (answer === false) {
      e.currentTarget.classList.add('incorrectAnswer');
    }
  }

  redirectAfterQuizEnded() {
    if (this.store.quizEnded === true) {
      this.props.history.push('/results');
    }
  }

  renderQuestions() {
    if (this.store.questions && this.store.questions.length > 0) {
      const currentQuestion = this.store.questions[this.store.currentQuestionIndex];

      if (currentQuestion) {
        return (
          <div className="question" key={this.store.currentQuestionIndex}>
            <h3>{currentQuestion.title}</h3>

            {currentQuestion.snippet && <pre><code className="language-js" dangerouslySetInnerHTML={{ __html: currentQuestion.snippet }} /></pre>}

            <ul className="mdl-list">
              {currentQuestion.answers.map((question, key) => (
                <li key={key} onClick={e => this.answerQuestion(question, e)}>
                  <button className="answer">{question.value}</button>
                </li>))
              }
            </ul>
          </div>
        );
      }
    }

    return null;
  }

  render() {
    const { store } = this;

    return (
      <main className="mdl-layout__content quiz-component">
        <div className="page-content">
          <Header />

          {this.store.questions.length > 0 && (
          <div className="container">
            <div className="row">
              <h5 className="">Question {store.currentQuestionIndex + 1}/{store.questions.length}</h5>
              <h5 className="difficulty">Difficulty: {store.difficulty}</h5>
            </div>

            <ul>
              {this.renderQuestions()}
            </ul>
          </div>
          )
        }
        </div>

        {store.correctNotification && <MessageBox title="Correct!" color="green" character="&#x2714;" />}
        {store.incorrectNotification && <MessageBox title="Wrong Answer!" color="red" character="&#x2716;" />}
        {this.store.quizEnded}
      </main>
    );
  }
}
