import Ember from 'ember';

export default Ember.Controller.extend({
  favoriteQuestions: Ember.inject.service(),
  actions: {
    add(){
      this.get('favoriteQuestions').add(this.get('model'))
    }
  }
});
