const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
    required: true
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agent'
  },
  rating: {
    type: Number,
    required: true
  },
  comment: {
    type: String
  },
  // Ajoutez d'autres champs pertinents pour les évaluations (date, auteur, etc.)
});

module.exports = mongoose.model('Review', reviewSchema);
