import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  actions: {
    favoriteQuestionHandler(question) {
     this.get('favoriteQuestions').add(question);
  },
  removeFavoriteQuestionHandler(question) {
    this.get('favoriteQuestions').remove(question);
  }
  },

  numberOfAnswers: Ember.computed('question.answers', function() {
    return this.get('question.answers').content.length;
  }),

  sortBy: ['score:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
});
