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

  switch (charm) {
    case 'generous':
        permissionsLevel = 0;
        break;
    case 'user':
        permissionsLevel = 10;
        canViewProfiles = true;
        break;
    case 'admin':
        permissionsLevel = 20;
        canViewProfiles = true;
        canImpersonateUsers = true;
        break;
    }
  }
