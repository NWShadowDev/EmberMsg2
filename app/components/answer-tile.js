import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    deleteAnswerHandler(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('deleteAnswerSender', answer);
      }
    },
    upVoteHandler(answer, score){
      this.sendAction('upVoteSender', answer, score+5);
    },
    downVoteHandler(answer, score){
      this.sendAction('downVoteSender', answer, score-5);
  }
}
});
