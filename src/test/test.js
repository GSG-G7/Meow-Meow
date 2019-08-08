/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */

const test = require('tape');
const supertest = require('supertest');
const app = require('../app');


test('testing for status code 404', (t) => {
  supertest(app)
    .get('/test')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('testing for rout  / ', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('testing for rout  /search ', (t) => {
  supertest(app)
    .post('/search')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
