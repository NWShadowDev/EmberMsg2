import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteQuestionHandler(question){
      if(confirm('Are you sure you want to delete this question?')) {
        this.sendAction('deleteQuestionSender', question);
      },
      deleteAnswerSender(answer) {
        this.sendAction('deleteAnswerSender', answer);
      },
      updateQuestionSender(question, params) {
        this.sendAction('updateQuestionSender', question, params);
      },
      saveAnswerSender(params) {
        this.sendAction('saveAnswerSender', params);
      }
    }
  }
});
