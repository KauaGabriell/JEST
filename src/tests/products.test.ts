import request from 'supertest';
import app from '../app';

describe('products', () => {
  it('get products', async () => {
    const response = await request(app).get('/products');

    expect(response.statusCode).toBe(200);
  });
});
