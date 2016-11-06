import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    AnswerFormShow() {
      this.set('addNewAnswer', true);
    },
    cancelSaveAnswer(){
      this.set('addNewAnswer', false);
    },
    saveAnswerHandler() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question'),
        score: 0,
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswerSender', params);
    }
  }
});
