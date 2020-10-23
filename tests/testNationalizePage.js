// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Nationalize API", function() {
    describe("GET /nationalize", function() {
        // Test to get homep page
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

        // Test to get single student record
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

    });
});