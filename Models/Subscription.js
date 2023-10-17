const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
  rate: {
    type: Number,
    required: true,
  },
  agency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agency',
    required: true,
  },
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
