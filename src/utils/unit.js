function removeUnit(unit) {
  return parseFloat(unit, 10);
}

function rem(unit, base = 16) {
  return `${removeUnit(unit) / removeUnit(base)}rem`;
}

function em(unit, base = 16) {
  return `${removeUnit(unit) / removeUnit(base)}em`;
}

// Node.js 모듈 <- CommonJS
module.exports = {
  removeUnit,
  rem,
  em,
};
