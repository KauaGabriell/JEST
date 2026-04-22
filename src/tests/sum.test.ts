import { sum } from '../sum';

describe('sum', () => {
  beforeAll(() => {
    //Executa algo antes de todos os testes
  });

  afterAll(() => {
    //Executa algo depois de todos os testes.
  });

  it('sum 3 + 7 must be 10', () => {
    const result = sum(3, 7);

    expect(result).toBe(10);
  });

  test('sum 2 + 2 must be 4', () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });
});
