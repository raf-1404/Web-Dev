var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var randNum;
var randomChosenColour;
var userClickedPattern = [];
var userChosenColor;
var audio;
var level = 0;



function nextSequence()
{
    
    level++;
    for (var i = 0; i < level; i++)
      {
          userClickedPattern.pop();
      }
    $("h1").text("Level " + level);
    randNum = Math.floor(Math.random()*4);
    randomChosenColour = buttonColours[randNum];
    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
    $("." + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    animatePress(randomChosenColour);
    
}


function playSound(name)
{
    audio = new Audio(name + ".mp3");
    audio.play();
}

function animatePress(currentColour)
{
    $("." + currentColour).addClass("pressed");
    setTimeout(function ()
    {
        $("." + currentColour).removeClass("pressed");

    }, 100);

}


       
        
function startOver()
{
    level = 0;
    started = false;

}
      
    

var started = false;
$(document).keydown(function () {
  if (!started)//on key press the game resets 
  {

     nextSequence();
     started = true;
     
        
    

}});


/*$(document).keypress(function() {
    if (!started) {
  
      //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
      $("h1").text("Level " + level);
      nextSequence();
      started = true;
    }
  });*/
  
$("button").click(function () {
    
     userChosenColor = $(this).attr("class");
     playSound(userChosenColor);
     $("." + userChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
     animatePress(userChosenColor);
     userClickedPattern.push(userChosenColor);
     //alert(userClickedPattern);
     checkAnswer(gamePattern.length-1);
    
});

function checkAnswer(currentLevel)
  {    
      if (gamePattern[currentLevel] === userClickedPattern[currentLevel])
         {
           if (gamePattern.length === userClickedPattern.length)
             {
              $("h1").text("Yay, Next Change");
              $("body").addClass("right");
              var audio = new Audio("wrong.mp3");
              audio.play();
              setTimeout(function () {$("body").removeClass("right")},200);
               setTimeout(function () {nextSequence();}, 1000);
               
             }
             else
             {
               
               $("h1").text("Can't Remember? Please refresh page to restart game");
               
               $(document).refresh(function () {
                level = 0;
                nextSequence();
               });
    
             }
          
            

             
         }
         else
         {
           
           $("h1").text("If forgot please refresh page to restart game");
           
           $(document).refresh(function () {
            level = 0;
            nextSequence();
           });

         }
      
      

      }
           

    

