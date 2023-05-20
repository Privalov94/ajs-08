import MathCharacter from '../mathCharacter';

test('return stoned decrease attack', () => {
  const merlin = new MathCharacter('Merlin', 2, 100, true);
  expect(merlin.attack).toBe(86);
});

test('return usual decrease attack', () => {
  const baltazar = new MathCharacter('Baltazar', 3, 100, false);
  expect(baltazar.attack).toBe(80);
});
