// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Home Page", () => {
    describe("GET /", () => {
        it("should get home webpage", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
    });

    describe("POST /", () => {
        it("should not get home webpage by POST", (done) => {
             chai.request(app)
                 .post('/')
                 .end((err, res) => {
                     res.should.have.status(404);
                     res.body.should.be.a('object');
                     done();
                  });
         });
    });

    describe("DELETE /", () => {
        it("should not get home webpage by DELETE", (done) => {
             chai.request(app)
                 .delete('/')
                 .end((err, res) => {
                     res.should.have.status(404);
                     res.body.should.be.a('object');
                     done();
                  });
         });
    });
});