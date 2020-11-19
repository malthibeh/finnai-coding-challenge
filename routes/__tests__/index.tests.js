const request = require('supertest');
const express = require('express');
const app = require("../../app");
 
describe('GET /id', function() {
  beforeAll(done => {
    done()
  })

  
  it('responds with json', async (done) =>{
    request(app)
      .get('/id')
      .set('Accept', 'application/json')
      .expect('Content-Type','text/html; charset=utf-8')
      .expect(200, done);
  });

  afterAll(done => {
    done()
  })
});