const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().collection('contacts').find(); 
  result.toArray().then((contacts) => {
    res.setHeader('Content-Type','application/json');
    res.status(200).json(contacts);
  });
};


const getSingle = async (req, res) => {
  const contactId = new ObjectId (req.params.id);
  const result = await mongodb.getDatabase().collection('contacts').find({ _id: contactId });
  result.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json'); 
    res.status(200).json(contacts[0]);
  });
};


// const getAll = async (req, res) => {
//   try {
//     const result = await mongodb.getDatabase().collection('contacts').find();
//     const contacts = await result.toArray(); 
//     res.setHeader('Content-Type','application/json');
//     res.status(200).json(contacts);
//   } catch (error) {
//     console.error('Error al obtener contactos:', error);
//     res.status(500).json({ message: 'Hubo un error al obtener los contactos' });
//   }
// };

// const getSingle = async (req, res) => {
//   try {
//     const contactId = new ObjectId(req.params.id);
//     const result = await mongodb.getDatabase().collection('contacts').find({ _id: contactId });
//     const contact = await result.toArray();  

//     if (contact.length === 0) {
//       return res.status(404).json({ message: 'Contacto no encontrado' });
//     }

//     res.setHeader('Content-Type', 'application/json'); 
//     res.status(200).json(contact[0]);
//   } catch (error) {
//     console.error('Error al obtener el contacto:', error);
//     res.status(500).json({ message: 'Hubo un error al obtener el contacto' });
//   }
// };


module.exports = {getAll,getSingle};