const {Router} = require("express");
const trainsController  =require('../controllers/controller')
const isAuthenticated = require('../../middlewares/isAuthenticated');

const router = Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Train:
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
 *           description: The auto-generated id of the train
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
  *   name: Train
  *   description: The Train managing API
  */



 /**
 * @swagger
 * /train:
 *   get:
 *     summary: Returns the list of all the Trains
 *     tags: [Trains]
 *     responses:
 *       200:
 *         description: The list of the Trains
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Train'
 *       400:
 *         description: Some error in server
 *       404:
 *         description: No trains avaliable
 */



router.get('/train' ,trainsController.trains_get);


/**
 * @swagger
 * /train/{id}:
 *   get:
 *     summary: Get the train by id
 *     tags: [Train]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Train id
 *     responses:
 *       200:
 *         description: The  Train as per Id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Train'
 *       400:
 *         description: Some error in server
 *       404:
 *         description: No Train avaliable
 */



router.get('/train/:id',isAuthenticated,trainsController.trains_getbyId);



/**
 * @swagger
 * /train:
 *   post:
 *     summary: To Add Train
 *     tags: [Train]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Train'
 *     responses:
 *       200:
 *         description: Trains Added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Train'
 *       400:
 *         description: Train is not added
 *      
 */



router.post('/train',isAuthenticated,trainsController.trains_post);


/**
 * @swagger
 * /train/{id}:
 *  patch:
 *    summary: Update the train by the id
 *    tags: [Train]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Train id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Train'
 *    responses:
 *      200:
 *        description: The train is updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Train'
 *      404:
 *        description: The Train  not found
 *      400:
 *        description: Some error happened
 */



router.patch('/train/:id',isAuthenticated,trainsController.trains_update);



/**
 * @swagger
 * /train/{id}:
 *   delete:
 *     summary: Delete train
 *     tags: [Train]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Train id
 * 
 *     responses:
 *       200:
 *         description: The Train deleted
 *       400:
 *         description: The Train not deleted
 *       404:
 *         description: The Train not found
 */



router.delete('/train/:id',isAuthenticated,trainsController.trains_delete);




router.put('/updateTrainSeat/:id' ,trainsController.UpdateTrainSeat);







module.exports = router;