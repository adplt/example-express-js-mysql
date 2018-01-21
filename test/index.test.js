import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../bin/www';
// import mongoose from 'mongoose';

const should = chai.should();
chai.use(chaiHttp);

describe('Blobs', () => {

  before(() => {
    // mongoose.createConnection('mongodb://localhost:27017/planatrip-database');
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
