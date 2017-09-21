
var quiz = [
  {
    question: 'Quels sont les bienfaits du chocolat ?',

    answers: ['antioxydant','anti-fatigue','exitant'],

    correctAnswer: 0,
  },

  {
    question: "Le chocolat est-il l'allier des femmes enceintes ?",
    answers: ['oui','non'],
    correctAnswer: 0,
  },
];

function ChocoGame() {
  this.quiz = quiz;
  this.players = [{ name: 'Joueur1', score: 0 }, { name: 'Joueur2', score: 0 }];
  this.isGoing = true;
  this.currentPlayer = 0;
  this.turnsPlayed = 0;
  this.waitingForAnswer = true;
}

ChocoGame.prototype.currentQuestion = function() {
  return this.quiz[this.turnsPlayed];
};

ChocoGame.prototype.play = function(answerSelected) {
  if (!this.isGoing) {
    return "error";
  }
  var player = this.players[this.currentPlayer];
  var good = false;
    if (answerSelected === this.currentQuestion().correctAnswer)
    {
      player.score++;
      good = true;
    }
    this.currentPlayer = this.currentPlayer === 0 ? 1 : 0; //to change the player
    this.turnsPlayed++;
    if (this.turnsPlayed >= this.quiz.length) {
      this.isGoing =false;
    }
  return good;
};




ChocoGame.prototype.winner = function() {
  if(this.isGoing) {
    return null;
  }
  if (this.players[0].score === this.players[1].score) {
    return [this.players[0], this.players[1]];
  } else if (this.players[0].score > this.players[1].score) {
    return [this.players[0]];
  } else {
    return [this.players[1]];
  }
};
