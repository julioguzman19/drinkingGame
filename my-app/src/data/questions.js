const questionsArray = [
  "Take a shot if youre a female",
  "If your name has the letter 'a' or 'e' or 'C' drink",
  "If you're under 6 feet tall Take at LEAST 2 drinks and give out a drink tfor every drink you take",
];

let result = questionsArray[Math.floor(Math.random() * questionsArray.length)];

module.exports = result;
