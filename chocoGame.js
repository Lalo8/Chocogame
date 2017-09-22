
var quiz = [
  {
    question: 'Quels sont les bienfaits du chocolat ?',
    answers: ['anti-oxydant','anti-fatigue','exitant'],
    correctAnswer: 0,
  },

  {
    question: "Le chocolat est-il l'allié des femmes enceintes ?",
    answers: ['oui','non'],
    correctAnswer: 0,
  },
  {
    question: "Quel est le minéral principal? ",
    answers: ['calcium','sodium', 'magnésium'],
    correctAnswer: 2,
  },
  {
    question: "Le chocolat a t-il toujours existé en France ?",
    answers: ['oui','non'],
    correctAnswer: 1,
  },
  {
    question: "la capacité anti-oxydante du cacao est plus faible que celle...",
    answers: ['thé noir','vin','aucune'],
    correctAnswer: 2,
  },
  {
    question: "Combien de type de chocolat existe t-il ?",
    answers: ['2','3','4'],
    correctAnswer: 2,
  },
  {
    question: "Le chocolat est bon pour ... ?",
    answers: ['lutter contre Alzheimer','empêcher les bêtises','être meilleur en development web'],
    correctAnswer: 0,
  },
  {
    question: "Mais où a donc été découvert le chocolat ?",
    answers: ['Amérique du Sud','Afrique subsaharienne', "Suisse"],
    correctAnswer: 0,
  },
  {
    question: "Quel composant rend le chocolat suisse si unique ?",
    answers: ['son lait','son amertume', 'sa poudre de cacao'],
    correctAnswer: 0,
  },
  {
    question: "La production excessive de chocolat contribue à : ",
    answers: ['la déforestation','la malnutrition', 'la fin du monde'],
    correctAnswer: 0,
  },
  {
    question: "Quel label contribue à une production plus responsable du chocolat ?",
    answers: ['UTZ','fuck les Agro!', 'For a better world'],
    correctAnswer: 0,
  },

  {
    question: "Quel est le nom original du chocolat ?",
    answers: ['Chocolate','Obsesion', "Xocoatl"],
    correctAnswer: 2,
  },


  {
    question: "Un-e ami-e est sur le point d'aller courir: lui conseillerez-vous un carré de chocolat ?",
    answers: ['non ca va l\'endormir ...','Oui ca va l\'aider à recupérer :) ', "Bah pourquoi pas lui offrir la tablette ?!"],
    correctAnswer: 1,
  },

  {
    question: "Le chocolat se marie très bien avec: ",
    answers: ['le poivre','la crevette', "les deux"],
    correctAnswer: 2,
  },

  { question: "Quel est le chocolat preféré des patissiers ?",
    answers: ['le chocolat au lait','le chocolat noir','le chocolat de couverture'],
    correctAnswer: 2,
  },

    { question: "Quelle est la marque de chocolat preférée des Francais ?",
      answers: ['Milka','Côte d\'or','Ferrero'],
      correctAnswer: 1,
    },
    { question: "Le chocolat blanc est -il du vrai chocolat ?",
      answers: ['non','oui'],
      correctAnswer: 0,
  },
      {
        question: "Quel est le duo qui nous a fait dansé tout l'été sur le chocolat ? ",
        answers: ['Aya Nakamura et Niska','l\'artiste - Awa Imani', 'Carla et Johnny '],
        correctAnswer: 1,
      },


  { question: "Quel est mon chocolat préféré?",
    answers: ['72%','50%', "99%"],
    correctAnswer: 0,
  },

  { question: "Quel est mon association préféré ?",
    answers: ['chocolat-citron','chocolat-piment', "chocolat-pamplemousse"],
    correctAnswer: 2,
  },

];

function ChocoGame() {
  this.quiz = quiz;
  this.players = [{ name: 'Joueur 1', score: 0 }, { name: 'Joueur 2', score: 0 }];
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
