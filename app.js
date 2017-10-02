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

  if (game.turnsPlayed %2 === 0) {
    $(".score2").removeClass("turn");
    $(".score1").addClass("turn");
  } else {
    $(".score1").removeClass("turn");
    $(".score2").addClass("turn");
  }


}

function updateAnswers () {
  var answersHtml = "" ;
  for (var i = 0; i< game.currentQuestion().answers.length;i++) {
    answersHtml += '<div class="choice a'+ i +'clicked" choice="'+ i +'">' + '<p>' +game.currentQuestion().answers[i] + '</p>'+ '</div>';
  }
  return answersHtml;
}

function registerClickChoiceHandler() {
  var ongoingTurn = 0;
  $(".answers").click(function(event) {
    var choiceDiv = $(event.target);
    if(!choiceDiv.hasClass('choice')) {
      return;
    }
    if (ongoingTurn !== game.turnsPlayed) {
      return;
    }
    choiceDiv.css("background-color", "#913720");
    var selectedChoice = parseInt(choiceDiv.attr('choice'));
    var isCorrectAnswer = game.play(selectedChoice);
    updateScore();
    if (isCorrectAnswer) {
      $('.question h4').text("You killed it !");
      $('.question').addClass("goodanswer");
      // TODO: change the background in green
    }
    else {
      $('.question h4').text("What's wrong with you ?!");
      // TODO: change the background in red
      $('.question').addClass("wronganswerT");
    }
    setTimeout(function() {
      if (game.isGoing) {
        updateQuestion();
        ongoingTurn++;
        $('.question').removeClass("goodanswer");
        $('.question').removeClass("wronganswerT");
        $("score2").addClass("selected");
      }
      else {
        updateScore();
        if (game.winner()) {
          $('.question, .answers, .titlequestion').hide();
          $('#winner').show();
          if (game.winner().length == 2) {
            $('.winnername').text("Your are both winners ! ");

          }
          else {
            $('.winnername').text( "Congrats " + game.winner()[0].name + " !" + " You've just became my chocolate mate :) !");
            $('.winnername').addClass(".winnername");
            var audio = $("#my_audio").get(0);
            audio.currentTime=0;
            audio.play();
          }
        }

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
  $("#my_audio2").get(0).play();
  registerClickChoiceHandler();
  $("#welcome").hide();
  $("#winner").hide();
  $("#game").show();
  updateQuestion();
  $("#my_audio").get(0).pause();



}

$(document).ready(function() {
  $("#my_audio").get(0).play();
  game = new ChocoGame();
$("#welcome > .regle").hide().delay(2000).fadeIn();
  $("#game").hide();
    $("#winner").hide();
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
