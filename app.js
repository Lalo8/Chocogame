var game;

function updateQuestion() {
  $("section#game > .question > h4")
    .text(game.currentQuestion().question);
    // $('.choices').hide().delay(3000).fadeIn();

var answersHtml = '';

$("section#game > .answers").html(answersHtml); //change hemtl qu'il ya auparavant


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
