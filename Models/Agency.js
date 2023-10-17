const mongoose = require('mongoose');

const agencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  properties: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
  }],
  revenues: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Revenue',
  }],
  sales: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sale',
  }],
});

module.exports = mongoose.model('Agency', agencySchema);
