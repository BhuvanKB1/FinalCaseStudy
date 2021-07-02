let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('express');
let server = require('../app');

chai.use(chaiHttp);

chai.should();


//GET
describe('Tasks API', () => {

    describe('GET /trainlist', () => {
        it("it should GET all the tasks", (done) => {
            chai.request(server)
                .get('/trainlist')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                })
        })
        it("it should NOT GET all the tasks", (done) => {
            chai.request(server)
                .get('/trainlists')
                .end((err, response) => {
                    if (err) done(err);
                    response.should.have.status(404);
                    done();
                })
        })

    })


    //GET by id
    describe('GET /trainlist/:id', () => {
        it("it should get by id", (done) => {
            const taskId = "60d2b0515c0e0c0730041076"
            chai.request(server)
                .get('/trainlist/' + taskId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('_id');
                    response.body.should.have.property('name');
                    response.body.should.have.property('time');
                    response.body.should.have.property('trainno');
                    response.body.should.have.property('_id').eq('60d2b0515c0e0c0730041076');
                    done();
                })
        })

        it("it should NOT GET by id", (done) => {
            const taskId = "123"
            chai.request(server)
                .get('/trainslists/' + taskId)
                .end((err, response) => {
                    if (err) done(err);
                    response.should.have.status(404);
                    done();
                })
        })
    })



    describe('GET /userinfo', () => {
        it("it should GET all the users", (done) => {
            chai.request(server)
                .get('/userinfo')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                })
        })
        it("it should NOT GET all the users", (done) => {
            chai.request(server)
                .get('/usersinfos')
                .end((err, response) => {
                    if (err) done(err);
                    response.should.have.status(404);
                    done();
                })
        })

    })



 






    describe('POST /adduserinfo', () => {
        it("it should POST new user info", (done) => {
            const task = {
                FirstName: "Kdaadad",
                LastName: "dadadada",
                Address: "ncksnvksvn",
                PhoneNo:78789723
            };
            chai.request(server)
                .post('/adduserinfo')
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    done();
                })
        })
        it("it should NOT POST new user", (done) => {
            const task = {
                FirstName:"adafaf"
            };
            chai.request(server)
                .post('/addstrains')
                .send(task)
                .end((err, response) => {

                    response.should.have.status(404);
                    done();
                })
        })

    })

    //PUT
    describe('PUT /updatetrain', () => {
        it("it should PUT a task", (done) => {
            const taskId = "60d2b123bfcd8048e06a6350";
            const task = {
                name: "Himalayn Express",
                time: "10 Hrs",
                trainno: "512377",
            };
            chai.request(server)
                .put('/trainlist/' + taskId)
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('name');
                    done();
                })
        })

        it("it should NOT PUT new task without 3 parameters", (done) => {
            const task = {
                time: "10:00",
            };
            chai.request(server)
                .put('/trainslists')
                .send(task)
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                })
        })
    })



})