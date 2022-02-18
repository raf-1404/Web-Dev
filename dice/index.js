
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor(((Math.random()*6)+1))
      document.getElementById("image").src ="dice" + randomNumber1 + ".png";
      document.getElementById("image1").src ="dice"+ randomNumber2 + ".png";
if (randomNumber1 > randomNumber2)
   document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.textContent = "Player 1 wins !!! 🚩";
else if (randomNumber1 < randomNumber2)
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.textContent = "🚩 Player 2 wins !!!";   
else
   document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.textContent = "Tie !!!"; 
  
 