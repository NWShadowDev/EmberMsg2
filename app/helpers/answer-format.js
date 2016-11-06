import Ember from 'ember';

export function answerFormat(params/*, hash*/) {
  if (params[0] === 0) {
    return "Post some answers already!!";
  }else if(params[0] < 2){
    return params[0] + " person answered";
  }
  else if(params[0] < 3){
    return params[0] + " people answered";
  }
  return Ember.String.htmlSafe("<span class='glyphicon glyphicon-heart' aria-hidden='true'></span>&nbsp;<span>" + params[0] + " people answered" + "</span>");
}

export default Ember.Helper.helper(answerFormat);
