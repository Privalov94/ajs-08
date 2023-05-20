import ArrayBufferConverter from '../ArrayBufferConverter';

test('return object', () => {
  const buffer = new ArrayBufferConverter();
  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  buffer.load(result);

  expect(buffer.toString()).toBe(result);
});
