
for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
{
 function press(pressb)
   { switch(pressb)
   {
       case "w": 
       var crash = new Audio("crash.mp3");
       crash.play();
       break;

       case "a": 
       var kickBass = new Audio("kick-bass.mp3");
       kickBass.play();
       break;

       case "s": 
       var snare = new Audio("snare.mp3");
       snare.play();
       break;

       case "d": var tom1 = new Audio("tom-1.mp3");
       tom1.play();
       break;

       case "j": var tom2 = new Audio("tom-2.mp3");
       tom2.play();
       break;

       case "k":var tom3 = new Audio("tom-3.mp3");
         tom3.play();
       break;

       case "l": var tom4 = new Audio("tom-4.mp3");
       tom4.play();
       break;

       default: console.log(buttonP);
           break;

   }
}

function keyPressed(key)
{
   document.querySelector("." + key).classList.add("pressed");//add css elements through javascript to html elements
  
   setTimeout(function (){document.querySelector("." + key).classList.remove("pressed");},100);
}


//for button
   //selects each button 
   document.querySelectorAll(".drum")[i].addEventListener("click", function () { 
      var buttonP = this.innerHTML;//this is document.querySelectorAll(".drum")[i].innerHTML - "w"/"a"
    //gets the title of button typed in html
      press(buttonP);//add sound acc to button press
     keyPressed(buttonP);//add and removes shade 

});
//for  keys
document.addEventListener("keydown",function (event){
    var keyP = event.key;//to get which key was pressed
    press(keyP);
    keyPressed(keyP);
});

}

