import { sum } from './server';

describe('sum', () => {
  it('sum 3 + 7 must be 10', () => {
    const result = sum(3, 7);

    expect(result).toBe(10);
  });

  test('sum 2 + 2 must be 4', () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });
});
