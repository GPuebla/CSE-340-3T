const express = require('express');
const router = express.Router();
const contact = require('../controllers/contacts');

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


router.get('/:id', contact.getSingle);
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

router.post('/', contact.createContact);

/**
 * @swagger
 * /contacts:
  post:
    summary: Create a new contact
    tags: [contacts]
    requestBody:
      required: true
      content:
        application/json:
          schema:
            type: object
            properties:
              firstName:
                type: string
              lastName:
                type: string
              email:
                type: string
              favoriteColor:
                type: string
              birthday:
                type: string
    responses:
      201:
        description: Contact created successfully
*/

router.put('/:id', contact.updateContact);

/**
 * @swagger
*
     put:
    summary: Update a contact by ID
    tags: [contacts]
    parameters:
      - in: path
        name: id
        required: true
        description: The ID of the contact to update
        schema:
          type: string
    requestBody:
      required: true
      content:
        application/json:
          schema:
            type: object
            properties:
              firstName:
                type: string
              lastName:
                type: string
              email:
                type: string
              favoriteColor:
                type: string
              birthday:
                type: string
    responses:
      200:
        description: Contact updated successfully
      400:
        description: Invalid input
      404:
        description: Contact not found
      500:
        description: Server error
*/

router.delete('/:id', contact.deleteContact);

/**
 * @swagger
*   /contacts/{id}:
  delete:
    summary: Delete a contact by ID
    tags: [contacts]
    parameters:
      - in: path
        name: id
        required: true
        schema:
          type: string
    responses:
      200:
        description: Contact deleted successfully
      404:
        description: Contact not found
*/


module.exports = router;