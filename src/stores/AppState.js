import { observable, action } from 'mobx';

const apiUrl = 'https://thejsquiz.com/api';

// Helper functions
const randomArray = arr => arr.slice().sort(() => 0.5 - Math.random());
const limitArray = (arr, size) => arr.slice(0, size);

class AppState {
    @observable questions = [];
    @observable currentQuestionIndex;
    @observable difficulty;
    @observable correctAnswerCount = 0;
    @observable incorrectAnswerCount = 0;
    @observable incorrectNotification = false;
    @observable correctNotification = false;
    @observable quizEnded = false;

    @action setQuizDifficulty(difficulty) {
      if (difficulty !== this.difficulty) {
        this.currentQuestionIndex = 0;
        this.difficulty = difficulty;
        this.correctAnswerCount = 0;
        this.incorrectAnswerCount = 0;
        this.quizEnded = false;
        this.setQuestions();
      }
    }

    @action resetQuiz() {
      this.difficulty = '';
      this.correctAnswerCount = 0;
      this.incorrectAnswerCount = 0;
      this.quizEnded = false;
    }

    setQuestions() {
      // Fetch questions from API and update
      fetch(`${apiUrl}/questions/${this.difficulty}`, { method: 'get' })
        .then(res => res.json())
        .then((json) => {
          this.questions = limitArray(randomArray(json), 15);
        });
    }

    answerQuestion(answer) {
      if (answer.isCorrect === true) {
        return this.correctAnswer();
      }

      this.incorrectAnswer();
      return false;
    }

    correctAnswer() {
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.quizEnded = true;
        this.correctAnswerCount += 1;
      } else {
        this.correctNotification = true;

        setTimeout(() => {
          this.correctNotification = false;
          this.correctAnswerCount += 1;
          this.currentQuestionIndex += 1;
        }, 1500);
      }
    }

    incorrectAnswer() {
      this.incorrectAnswerCount += 1;
      this.incorrectNotification = true;

      setTimeout(() => {
        this.incorrectNotification = false;
      }, 1500);
    }
}

export default AppState;
