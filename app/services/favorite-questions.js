import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],
  add(question){
    if(this.get("questionExists")) {
      alert('You already have this question favorited! Try adding another!')
    } else {
    this.get('questions').pushObject(question)
  }
  },
  remove(question){
    this.get('questions').removeObject(question)
  },
  includes(question) {
    return this.get('questions').includes(question)
  },
  questionExists: Ember.computed.get('question.length')
});
