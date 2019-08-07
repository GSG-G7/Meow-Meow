
const test = require('tape');
const supertest = require('supertest');
const app = require('../app');


test("testing for status code 404",t=>{
    supertest(app)
    .get('/test')
    .expect(404)
    .expect("Content-Type", /html/)
    .end((err,res)=> {
        t.error(err)
        t.equal(res.text,'Page Not Found','should return not found')
        t.end()
    })
})

test("testing for rout  / ",t=>{
    supertest(app)
    .get('/')
    .expect(200)
    .expect("Content-Type", /html/)
    .end((err,res)=> {
        t.error(err)
        t.end()
    })
})

test("testing for rout  /search ",t=>{
    supertest(app)
    .post('/search')
    .expect(200)
    .expect("Content-Type", /html/)
    .end((err,res)=> {
        t.error(err)
        t.end()
    })
})

