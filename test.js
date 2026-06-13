const { app, server } = require('./index');
const request = require('supertest');

describe('GET /', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  afterAll(() => {
    server.close();
  });
});
