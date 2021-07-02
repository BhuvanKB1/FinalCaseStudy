const {Router} = require("express");
const searchController = require('../controllers/searchControllers')

const router =Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Search:
 *       type: object
 *       required:
 *         - train_id
 *         - name
 *         - source
 *         - destination
 *         - date
 *         - time
 *         - price
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the checkIn
 *         train_id:
 *           type: number
 *           description: This is train id
 *         name:
 *           type: string
 *           description: this is train name
 *         source:
 *           type: string
 *           description: The source address of train
 *         destination:
 *           type: string
 *           description: The destination address of train
 *         date:
 *           type: date
 *           description: This is train date
 *         time:
 *           type: string
 *           description: this is train time
 *         price:
 *           type: number
 *           description: The price  of train seat
 *       
 */

 
 /**
  * @swagger
  * tags:
  *   name: Search
  *   description: The search managing API
  */




/**
 * @swagger
 * /train/search?source={source}&destination={destination}:
 *   get:
 *     summary: Returns the list of trains
 *     tags: [Search]
 *     parameters:
 *        - in: query
 *          name: source
 *          schema:
 *            type: string
 *          required: true
 *          description: source address
 *        - in: query
 *          name: destination
 *          schema:
 *            type: string
 *          description: destination addresss
 *     responses:
 *       200:
 *         description: The list of the trains
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Search'
 *       300:
 *         description: No trains are avalaible at this moment
 *       400:
 *         description: Query is Invalid
 *       404:
 *         description: some server error 
 */





router.get('/train/search',searchController.trains_get);

module.exports =router;