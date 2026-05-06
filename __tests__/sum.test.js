// sum.test.js
import { sum } from '../code-to-unit-test/sum';

test('add test', () => {
  // TODO
  expect(1 + 2).toBe(5);
});

test('sum test', () => {
    expect(sum(1,2)).toBe(3);
});