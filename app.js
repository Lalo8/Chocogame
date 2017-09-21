var game;

function updateQuestion() {
  $("section#game > .question > h4")
    .text(game.currentQuestion().question);
    // $('.choices').hide().delay(3000).fadeIn();

var answersHtml = "" ;

function updateAnswers () {
  for (var i = 0; i< game.currentQuestion().answers.length;i++) {
    answersHtml += '<div class="choice">' + '<p>' +game.currentQuestion().answers[i] + '</p>'+ '</div>';
  }return answersHtml;
}

answersHtml = updateAnswers();
$(".answers").html(answersHtml);

var n = game.turnsPlayed + 1

  $("section#game > .titlequestion > h2").html("Question" + " " + n);

    // game.currentQuestion().answers





}

function optionClicked () {
  $("section#game > .answers > .choices")
    .text(game.currentQuestion().answers);

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
