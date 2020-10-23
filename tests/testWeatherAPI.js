// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Weather API", function() {
    describe("GET /weather", function() {
        // Test to get homep page
        this.timeout(10000);
        it("should get weather information", function(done) {
             chai.request(app)
                 .get('/apiClient/weather')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     res.body.should.have.property('dataseries');
                     done();
                  });
         });

        // Test to get single student record
        it("should get weather information with two parameters", (done) => {
             const longitud = 100;
             const latitud = 20;
             chai.request(app)
                 .get(`/apiClient/weather?longitud=${longitud}&latitud=${latitud}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     res.body.should.have.property('dataseries');
                     done();
                  });
         });
         
        // Test to get single student record
        it("should get error of invalid coordinate", (done) => {
            const longitud = 200;
            const latitud = 200;
            chai.request(app)
                .get(`/apiClient/weather?longitud=${longitud}&latitud=${latitud}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('string');
                    res.body.should.be.equal('ERR: invalid coordinate');
                    done();
                 });
         });

         // Test to get single student record
        it("should get error of product", (done) => {
            const product = 'architect';
            chai.request(app)
                .get(`/apiClient/weather?product=${product}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    res.body.should.have.property('ERR');
                    done();
                 });
         });

         // Test to get single student record
         it("should get error of output", (done) => {
            const output = 'csv';
            chai.request(app)
                .get(`/apiClient/weather?output=${output}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    res.body.should.have.property('ERR');
                    done();
                 });
         });

    });
});