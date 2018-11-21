// Write your code in this file!
function scuberGreetingForFeet(feet){
  let result
  if (feet <= 400){
    result = 'This one is on me!';
  } else if (2000 < feet && feet < 2500){
    result = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500){
    result = 'No can do.';
  }
  return result
}
function ternaryCheckCity(city){
   return (city === "NYC" ? "Ok, sounds good." : "No go.");
  }
  
  function switchOnCharmFromTip(charm){
    switch (charm){
      case charm === 'generous':
        console.log("Thank you so much." );
         case charm === 'not as generous':
        console.log("Thank you." );
         break;
        console.log("Thank you so much." );
      
    }
  }

switch (true) {
    case age >= 21:
        canDrink = true;
    case age >= 18:
        isAdult = true;
        canEnlist = true;
    case age >= 16:
        canWork = true;
}