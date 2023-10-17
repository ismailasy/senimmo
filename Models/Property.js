const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['house', 'apartment', 'commercial'],
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Référence à l'agent associé
    required: true
  },
  status: {
    type: String,
    enum: ['for_sale', 'for_rent', 'sold', 'rented'], // Ajoutez d'autres statuts si nécessaire
    required: true
  },
  // Ajoutez d'autres champs spécifiques aux propriétés si nécessaire
});

module.exports = mongoose.model('Property', propertySchema);
