import AppState from './ignore/store';
import mockQuestions from './ignore/mockQuestion.json';

/*
 TEST INITIAL STORE VALUES
*/
describe('store initial values', () => {
    let Store = new AppState();

    it('should not have any questions', () => {
        expect(Store.questions.length).toBe(0);
    });

    it('should not have a current question index', () => {
        expect(Store.currentQuestionIndex).toBeUndefined()
    });

    it('should not have a difficulty set', () => {
        expect(Store.difficulty).toBeUndefined();
    });

    it('should have a correct answer count of 0', () => {
        expect(Store.correctAnswerCount).toEqual(0);
    });

    it('should have a incorrect answer count of 0', () => {
        expect(Store.incorrectAnswerCount).toEqual(0);
    });

    it('should not show incorrectNotification', () => {
        expect(Store.incorrectNotification).toBe(false);
    });

    it('should not show correctNotification', () => {
        expect(Store.correctNotification).toBe(false);
    });

    it('should not be quiz ended', () => {
        expect(Store.quizEnded).toBe(false);
    });
});

describe('store methods', () => {
    it('should set the quiz difficulty', () => {
        let Store = new AppState();
        Store.setQuizDifficulty('easy');

        expect(Store.difficulty).toEqual('easy');
        expect(Store.currentQuestionIndex).toEqual(0)
    });

    it('should reset the quiz', () => {
        let Store = new AppState();

        // Set the difficulty and check its set
        Store.setQuizDifficulty('easy');
        expect(Store.difficulty).toEqual('easy');

        // Reset the difficulty and check its reset
        Store.resetQuiz();
        expect(Store.difficulty).toEqual('');
    });

    it('should set the quiz questions', () => {
        let Store = new AppState();

        expect(Store.questions.length).toBe(0);
        Store.setQuestions(mockQuestions);
        expect(Store.questions.length).toBe(2);
    });
});