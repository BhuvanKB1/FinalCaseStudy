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
                .get('/trainslists')
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
            const taskId = "60d1d4f01328d90090eeccb5"
            chai.request(server)
                .get('/trainlist/' + taskId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('_id');
                    response.body.should.have.property('name');
                    response.body.should.have.property('time');
                    response.body.should.have.property('trainno');
                    response.body.should.have.property('_id').eq('60d1d4f01328d90090eeccb5');
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

    //POST
    describe('POST /addtrain', () => {
        it("it should POST new task", (done) => {
            const task = {
                name: "Kokan Express",
                time: "10:00",
                trainno: "512377",
            };
            chai.request(server)
                .post('/addtrain')
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    done();
                })
        })
        it("it should NOT POST new task without parameters", (done) => {
            const task = {
                time: "11:00"
            };
            chai.request(server)
                .post('/addtrains')
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
            const taskId = "60d047d5ac7cf92d2c4c501b";
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

    //DELETE
    describe('DELETE /deletetrain/:id', () => {
        it("it should DELETE a task", (done) => {
            const taskId = "60d2b0d36aab6145300461d5";
            chai.request(server)
                .delete('/deletetrain/' + taskId)
                .end((err, response) => {
                    response.should.have.status(200);
                    done();
                })
        })

        it("it should NOT Delete new task without 3 parameters", (done) => {
            const taskId = "60d1af165987ec63d05dfab2";
            chai.request(server)
                .delete('/deletetrains')
                .end((err, response) => {
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



    describe('DELETE userinfo', () => {
        it("it should DELETE a task", (done) => {
            const taskId = "60d55fd41e58da46149d1b49";
            chai.request(server)
                .delete('/userinfo/' + taskId)
                .end((err, response) => {
                    response.should.have.status(200);
                    done();
                })
        })

        it("it should NOT Delete new task without 3 parameters", (done) => {
            const taskId = "60d1af165987ec63d05dfab2";
            chai.request(server)
                .delete('/deletetrains')
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                })
        })
    })





})