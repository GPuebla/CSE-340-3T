const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().collection('Contacts').find(); 
  result.toArray().then((contacts) => {
    res.setHeader('Content-Type','application/json');
    res.status(200).json(contacts);
  });
};


const getSingle = async (req, res) => {
  const contactId = new ObjectId (req.params.id);
  const result = await mongodb.getDatabase().collection('Contacts').find({ _id: contactId });
  result.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json'); 
    res.status(200).json(contacts[0]);
  });
};


const createContact = async (req, res) => {
  try {
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };

    const result = await mongodb.getDatabase().collection('Contacts').insertOne(contact);

    if (result.acknowledged) {
      res.status(201).json({ message: 'Contact created successfully', id: result.insertedId });
    } else {
      res.status(500).json({ message: 'Error creating contact' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error creating contact', error: error.message });
  }
};



const updateContact = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };

    const result = await mongodb
      .getDatabase()
      .collection('Contacts')
      .replaceOne({ _id: contactId }, contact);

    if (result.modifiedCount > 0) {
      res.status(200).json({ message: 'Contact updated successfully' });
    } else {
      res.status(404).json({ message: 'Contact not found or no changes made' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating contact', error: error.message });
  }
};



const deleteContact = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);

    const result = await mongodb
      .getDatabase()
      .collection('Contacts')
      .deleteOne({ _id: contactId });

    if (result.deletedCount === 1) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ message: 'Contact successfully deleted' });
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting contact', error: error.message });
  }
};


module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact
};