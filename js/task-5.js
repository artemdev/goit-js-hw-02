const checkForSpam = function (message) {
  // lowercase message
  message = message.toLowerCase();
  //validate and return
  return message.includes('sale') || message.includes('spam') ? true : false;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
