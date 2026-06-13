const { app, server } = require('./index');
const request = require('supertest');

describe('GET /', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('GET /health', () => {
  it('should return healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
    expect(res.body.uptime).toBeDefined();
    expect(res.body.timestamp).toBeDefined();
  });

  afterAll(() => {
    server.close();
  });
});
