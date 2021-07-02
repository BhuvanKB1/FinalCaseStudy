const chai = require('chai');
const chaiHttp = require('chai-http');
const book = require('../book');
//const database = require("../routes/dbRoute");
var assert = require("assert");


chai.should();
chai.use(chaiHttp);

// get book
// describe('Get /book',()=>{
//     it('it should get all data',(done)=>{
//         chai.request(book)
//         .get('/books/viewBook')
//         .end((err,response)=>{
//             response.should.have.status(200);
//             response.body.should.be.a('array');
//         done();
//         })
//     })
// })


//post book 
// describe('post /book/addbook',()=>{
//     it('it should post data',(done)=>{
//         const BookingObj={
//             user_id: "60d05538b20ac32f10dc76a3",
//             flight_id: "aaaaaaaaaaaa",
//             Departure:new Date(req.body.Departure)
//         }
//         chai.request(book)
//         .post('/book/addbook')
//         .send(demo)
//         .end((err,response)=>{
//             response.should.have.status(200);
//             response.body.should.be.a('object');
//         done();
//         })
//     })
// }) 


//DELETE by id
// describe('/DELETE/:id book', () => {
//     it('it should DELETE a book given the id', (done) => {
//             let id = '60cdd55906ea0b17fc3c83e5';
//               chai.request(book)
//               .delete('/book/delBook' + id)
//               .end((err, res) => {
//                     res.should.have.status(200);
//                 done();
//             });
//     });
// });


