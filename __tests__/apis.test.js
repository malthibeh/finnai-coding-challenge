const request = require('supertest');
const mongoose = require('mongoose');
const app = require("../app");
 
describe('test /apis routes', function() {
  beforeAll((done) => {
    done()
  })

  it('GET / route', (done) =>{
    request(app)
        .get("/")
        .expect(200);
        done();
  });
  
  it('GET /api/id route', (done) =>{
    request(app)
      .get('/api/id')
      .set('Accept', 'application/json')
      .expect('Content-Type','text/html; charset=utf-8')
      .expect(200, done);
  });

  it('GET /api/user route', (done) =>{
    request(app)
      .get('/api/user')
      .set('Accept', 'application/json')
      .expect('Content-Type','application/json; charset=utf-8')
      .expect(200, done);
  });

  it('POST /api/user route', (done) =>{
    const user = {
      "_id": "5fb72a50a901d7c49ce13240",
      "name": "MOHAMED AL-THIBEH",
      "age": 1,
      "email": "test@gmail.com",
      "date": "2020-11-20T02:30:40.042Z"
    };

    request(app)
      .post('/api/user')
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type','application/json; charset=utf-8')
      .expect(200);
      done();
  });

  afterAll(done => {
    done()
  })
});