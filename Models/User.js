const mongoose = require('mongoose');

// Schéma pour les informations spécifiques aux agents
const agentSchema = new mongoose.Schema({
  propertiesManaged: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
  // Ajoutez d'autres champs spécifiques aux agents si nécessaire
});

// Schéma pour les informations spécifiques aux clients
const clientSchema = new mongoose.Schema({
  propertiesInterested: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
  // Ajoutez d'autres champs spécifiques aux clients si nécessaire
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'superadmin', 'agent', 'client'],
    default: 'client'
  },
  agentInfo: agentSchema, // Ajout du sous-schém
  clientInfo: clientSchema // Ajout du sous-schém
});

module.exports = mongoose.model('User', userSchema);
