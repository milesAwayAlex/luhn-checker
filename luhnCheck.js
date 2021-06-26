export default number => {
  const revNumArr = number
    .toString()
    .split('')
    .reverse()
    .map(e => +e);
  const luhnSum = revNumArr
    .map((e, i) => (i % 2 === 1 ? e * 2 : e))
    .join('')
    .split('')
    .map(e => +e)
    .reduce((a, e) => a + e);
  return luhnSum % 10 === 0;
};
