import sum from './node-notify-manual';

test('adds 1 + 2 to equal 3', async () => {
  expect.assertions(1);
  // https://stackoverflow.com/a/54068300/467453
  const res = await sum(1, 2);
  expect(res).toBe(3);
});
