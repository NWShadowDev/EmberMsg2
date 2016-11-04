import Ember from 'ember';

export default Ember.Component.extend({

  numberOfAnswers: Ember.computed('question.answers', function() {
    return this.get('question.answers').content.length;
  }),

  sortBy: ['score:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
});
