const { Router } = require('express');
const Controller = require('../controllers/Controller');

const router = Router();


/** 
 *  @swagger
 *  /signup:
 *  get:
 *      summary: "To sign up"
 *      responses: 
 *          '200':
 *              description: A successful response
 */
router.get('/signup', Controller.signup_get);

/**
 * @swagger
 * /signup:
 *   post:
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object                      
 *     responses:
 *       200:
 *         description: Returns the requested user
 */
router.post('/signup', Controller.signup_post);

/** 
 *  @swagger
 *  /login:
 *  get:
 *      summary: "To get login"
 *      responses: 
 *          '200':
 *              description: A successful response
 */
router.get('/login', Controller.login_get);

/**
 * @swagger
 * /login:
 *   post:
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object                      
 *     responses:
 *       200:
 *         description: Returns the requested user
 */
router.post('/login', Controller.login_post);


router.get('/logout', Controller.logout_get);


module.exports = router;