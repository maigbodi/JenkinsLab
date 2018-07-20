var chai = require('chai');
var chaiHttp = require('chai-http');
var chaiJquery = require('chai-jquery');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Homepage', function() {
  it('should display the homepage at / GET', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should contain the word Sparta at / GET', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.text.should.contain('Sparta')
        done();
      });
  });
});


