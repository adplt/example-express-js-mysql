import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../bin/www';
import Sequelize from 'sequelize';
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];

const should = chai.should();
chai.use(chaiHttp);

describe('Blobs', () => {

  before(() => {
    var sequelize = new Sequelize('exampledb', 'adplt', 'MaJoTwin0707', config);
  });

  it('/ should have status 200 (Success)', (done) => {
    chai.request(server).
      get('/').
      end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        // res.body.should.have.property('message').eql('Book successfully added!');
        // res.body.book.should.have.property('title');
        // res.body.book.should.have.property('author');
        // res.body.book.should.have.property('pages');
        // res.body.book.should.have.property('year');
        done();
      });
  });

  it('/login should have status 200 (Success)', (done) => {
    chai.request(server).
      post('/login').
      send({
      	username: 'adplt',
      	password: '12345678'
      }).
      end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  }).timeout(50000);

});
