// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Hello World Page", () => {
    describe("GET /hello", () => {
        it("should get hello world page by GET", (done) => {
             chai.request(app)
                 .get('/hello')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
    });

    describe("POST /hello", () => {
        it("should not get hello world page by POST", (done) => {
             chai.request(app)
                 .post('/hello')
                 .end((err, res) => {
                     res.should.have.status(404);
                     res.body.should.be.a('object');
                     done();
                  });
         });
    });

    describe("DELETE /hello", () => {
        it("should not get hello world page by DELETE", (done) => {
             chai.request(app)
                 .delete('/hello')
                 .end((err, res) => {
                     res.should.have.status(404);
                     res.body.should.be.a('object');
                     done();
                  });
         });
    });
});