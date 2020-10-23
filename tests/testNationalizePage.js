// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Nationalize API", function() {
    describe("GET /nationalize", function() {
        this.timeout(1000);
        it("should get nationalize of wizeline", function(done) {
             chai.request(app)
                 .get('/apiClient/nationalize')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     res.body.should.have.property('country');
                     done();
                  });
         });

        it("should get nationalize of Miguel", (done) => {
             const name = 'Miguel';
             chai.request(app)
                 .get(`/apiClient/nationalize?name=${name}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     res.body.should.have.property('country');
                     done();
                  });
         });
         it("should get error, since is trying to nationalize a number", (done) => {
            const name = 999;
            chai.request(app)
                .get(`/apiClient/nationalize?name=${name}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    res.body.should.have.property('ERR');
                    done();
                 });
        });
    });
});