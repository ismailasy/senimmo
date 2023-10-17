const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  country: {
    type: String,
    required: true
  },
  // Ajoutez d'autres champs pertinents pour les villes (population, code postal, etc.)
});

module.exports = mongoose.model('City', citySchema);
