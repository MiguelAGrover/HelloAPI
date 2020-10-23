// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Weather API", function() {
    describe("GET /weather", function() {
        this.timeout(10000);
        it("should get weather information as json", function(done) {
             chai.request(app)
                 .get('/apiClient/weather')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     res.body.should.have.property('dataseries');
                     done();
                  });
         });

        it("should get weather information with two parameters as json", (done) => {
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
         
        it("should get error of invalid coordinate as the latitud and longitud are out of range", (done) => {
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

        it("should get error of product as product is invalid", (done) => {
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

         it("should get error of output as csv format is not valid", (done) => {
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