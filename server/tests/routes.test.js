const request = require('supertest');
const app = require('../index.js');

describe('User Endpoints', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        email: 'foo@bingle.co.za',
        password: 'foobar',
        passwordConf: 'foobar'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Account created');
  });
});
