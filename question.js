'use strict';

class Question {
  constructor(question){
    this.question = question;
    this.save()
  }
  save(){
    this.constructor._All.push(this)
  }
  
}

Question._All = [];
