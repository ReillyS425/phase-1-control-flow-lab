function scuberGreetingForFeet(distance){
  const freeSampleMsg = 'This one is on me!';
  const twentyDollarMsg = 'That will be twenty bucks.';
  const thirtyDollarMsg = 'I will gladly take your thirty bucks.';
  const notAllowedMsg = 'No can do.';

  if (distance <= 400) {
      return freeSampleMsg;
  }  
  else if (distance <= 2000) {
    return twentyDollarMsg;
  }
  else if (distance <= 2500) {
    return thirtyDollarMsg;
  }
  else if (distance > 2500) {
    return notAllowedMsg;
  }
}
function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){  
  switch (tip) {
    case 'generous' :
      return 'Thank you so much.';
      break;
      case 'not as generous' :
        return 'Thank you.';
        break;
        default:
          return 'Bye.';
          break;
  }
}