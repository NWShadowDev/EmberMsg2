import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    updateQuestionFormShow(){
      this.set('updateQuestion',true);
    },
    cancelUpdateQuestion() {
      this.set('updateQuestion', false);
    },
    updateQuestionHandler(question){
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes')
      };
    this.set('updateQuestion', false);
    this.sendAction('updateQuestionSender', question, params);
    },
  }
});
