function getRandomNumber(max){
  Math.floor(Math.random() * max);
}

function getNextRoundRobin(total, current){
  return ((current + 1) < total ? (current_+ 1) : 0);
}

module.exports = {
  getRandomNumber,
  getNextRoundRobin
}