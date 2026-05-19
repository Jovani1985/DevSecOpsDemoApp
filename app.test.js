const { greet } = require('./app');

test('greet returns expected message', () => {
  expect(greet('Jovani')).toBe('Hello, Jovani!');
});
