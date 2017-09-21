var game;

function updateQuestion() {
  $("section#game > .question > h4")
    .text(game.currentQuestion().question);
    // $('.choices').hide().delay(3000).fadeIn();

  var answersHtml = updateAnswers();
  $(".answers").html(answersHtml);
  var n = game.turnsPlayed + 1;

  $("section#game > .titlequestion > h2").html("Question" + " " + n);

      // game.currentQuestion().answers
  optionClicked();


}

function updateAnswers () {
  var answersHtml = "" ;
  for (var i = 0; i< game.currentQuestion().answers.length;i++) {
    answersHtml += '<div class="choice a'+ i +'clicked" choice="'+ i +'">' + '<p>' +game.currentQuestion().answers[i] + '</p>'+ '</div>';
  }
  return answersHtml;
}

function optionClicked () {
  $(".choice").click(function(event) {
    $(this).css("background-color", "#913720");
    var selectedChoice = parseInt($(this).attr('choice'));
    var isCorrectAnswer = game.play(selectedChoice);
    updateScore();
    if (isCorrectAnswer) {
      $('.question h4').text("Bonne réponse!");
      // TODO: change the background in green
    }
    else {
      $('.question h4').text("Mauvaise réponse...");
      // TODO: change the background in red
    }
    setTimeout(function() {
      if (game.isGoing) {
        updateQuestion();
      }
      else {
        console.log("OVER");
        // TODO: change the page to show the winner
      }
    }, 2000);
  });
}

function updateScore() {
  $(".score1 .number").text(game.players[0].score);
  $(".score2 .number").text(game.players[1].score);

}

function startGame() {
  $("#welcome").hide();
  $("#game").show();
  updateQuestion();
}

$(document).ready(function() {
  game = new ChocoGame();

  $("#game").hide();
  // TODO récupérer le boutton arrow et
  // le faire changer de section
  $("#downArrow").click(function() {
//    $('html,body').animate({
//         scrollTop: $("#game").offset().top
//     }, 2000);
//

    startGame();
  });
});
