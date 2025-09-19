const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

router.get('/:id', user.getSingle);

router.get('/', user.getAll);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 */
router.get('/', user.getSingle);

module.exports = router;