const express = require('express');
const router = express.Router();
const contact = require('../controllers/contacts');

router.get('/:id', contact.getSingle);

router.get('/', contact.getAll);

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get all contacts
 *     tags: [contacts]
 *     responses:
 *       200:
 *         description: List of contacts
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
router.get('/', contacts.getSingle);

module.exports = router;