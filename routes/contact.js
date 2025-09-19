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

router.get('/', contact.getSingle);

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Get a single contact by ID
 *     tags: [contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the contact to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single contact
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 email:
 *                   type: string
 *                 favoriteColor:
 *                   type: string
 *                 birthday:
 *                   type: string
 *       404:
 *         description: Contact not found
 *       500:
 *         description: Server error
 */

module.exports = router;