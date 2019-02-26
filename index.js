function BoardMember(name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto = boardMember => ("No, I must disagree");
  this.approve = boardMember =>("You can do that!");
  this.doCharity = boardMember => ("I like to help people.");
  this.releasePressStatement = boardMember => ("You will see great things from Scuber.");
  this.sayHi = boardMember => (`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`);
}
