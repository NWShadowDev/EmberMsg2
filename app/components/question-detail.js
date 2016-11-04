import Ember from 'ember';

export default Ember.Component.extend({
  //sort score in descending order
  sortBy: ['score:desc'],
  numberOfAnswers: Ember.computed('question.answers', function() {
    return this.get('question.answers').content.length;
  }),
  sortedScores: Ember.computed.sort('question.answers', 'sortBy'),
  //actions
  actions: {
    deleteQuestionHandler(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('deleteQuestionSender', question);
      }
    },
    deleteAnswerSender(answer) {
      this.sendAction('deleteAnswerSender', answer);
    },
    updateQuestionSender(question, params){
      this.sendAction('updateQuestionSender', question, params);
    },
    saveAnswerSender(params){
      this.sendAction('saveAnswerSender', params);
    },
    upVoteSender(answer, score){
      this.sendAction('upVoteSender', answer, score);
    },
    downVoteSender(answer, score){
      this.sendAction('downVoteSender', answer, score);
    },
  }
});
