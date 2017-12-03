'use strict';

class Question {
  constructor(question){
    this.question = question;
    this.save()
  }
  save(){
    this.constructor._All.push(this)
  }

  static All() {
    return this._All;
  }
  static Find(email){
    return this.All().filter(function(question)) {
      return question.email === email;
    )
    }
  }

}

Question._All = [];
