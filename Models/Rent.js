const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
    required: true,
  },
  tenant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assurez-vous que vous avez un modèle User pour représenter les locataires
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  monthlyRent: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  // Vous pouvez ajouter d'autres champs spécifiques à la location ici
});

module.exports = mongoose.model('Rent', rentSchema);
