const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');
const { syncAndSeed } = require('../db');

const testApp = supertest(app);

describe('Our app', () => {
  beforeEach(() => syncAndSeed());
  it('can successfully run tests', () => {
    expect(1).to.equal(1);
  });
  it('has a working GET /', async () => {
    const response = await testApp.get('/');
    expect(response.status).to.equal(200);
    expect(response.text).to.contain('Acme Movie API');
  });
});
