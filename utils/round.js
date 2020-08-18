export const parseToBaseTen = (string) => parseInt(string, 10);

const round = (value, decimals) =>
  Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);

export const roundStringIntsTwoDP = (num, denom) =>
  num && denom ? round(parseToBaseTen(num) / parseToBaseTen(denom), 2) : 'N/A';
