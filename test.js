const request = require('supertest');
const { app } = require('./index');

describe('GET /', () => {
  it('should return application dashboard', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toBe(200);
    expect(res.type).toBe('text/html');
    expect(res.text).toContain('Node.js CI/CD Platform');
  });
});

describe('GET /health', () => {
  it('should return healthy status', async () => {
    const res = await request(app).get('/health');

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });
});
