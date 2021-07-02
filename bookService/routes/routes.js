const express = require('express')
const router = express.Router()
const { bookDetails_get, bookDetails_post,deleteBookDetail,getBooks, viewBook} = require('../controller/controller')
const isAuthenticated = require('../../middlewares/isAuthenticated')


/**
 * @swagger
 * components:
 *      schemas:
 *          book:
 *              type: object
 *              required:
 *                  - user_id
 *                  - train_id
 *                  - booked_time
 *                  - Departure
 *                  - numOfSeats
 *              properties:
 *                  id:
 *                      type: string
 *                      description: The auto generated unique id of the Admin Members.
 *                  user_id:
 *                      type: string
 *                      description: name of the train.
 *                  train_id:
 *                      type: string
 *                      description: location from.
 *                  booked_time:
 *                      type: string
 *                      description: location to.
 *                  Departure:
 *                      type: array
 *                      description: type of class.
 *                  numOfSeats:
 *                      type: number
 *                      description: type of class.
 *              example:
 *                  user_id: 60d070c16812e75494f07894
 *                  train_id: 60d070c16812e75494f07894
 *                  booked_time: 2021-06-19T11:28:10.716+00:00
 *                  Departure: 2021-06-05T18:30:00.000+00:00
 *                  numOfSeats: 5
 */



 /**
  * @swagger
  * tags:
  *   name: train
  *   description: The train managing API
  */


 /**
 * @swagger
 * /books/addbook:
 *   post:
 *     summary: Create a new booking detail
 *     tags: [Booking Service]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/book'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/book'
 *       201:
 *         description: Unauthorized client
 *         content:
 *           application/json:
 *             schema:
 *               msg: Unauthorized client
 *       400:
 *         description: page not found 
 */

 router.post('/addbook',isAuthenticated, bookDetails_post)


 /**
 * @swagger
 * /books/delBook/{id}:
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Booking Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 * 
 *     responses:
 *       200:
 *         description: The book was deleted
 *         content:
 *            application/json:
 *              schema:
 *                  type: object
 *       404:
 *         description: The book was not found
 */
router.delete('/delBook/:id',isAuthenticated,deleteBookDetail)


/**
 * @swagger
 * /books/viewBook:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Booking Service]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/book'
 */

router.get('/viewBook',isAuthenticated,viewBook)


router.get('/payment', (req,res) => {
  res.render('payment')
})

module.exports = router
