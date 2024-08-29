const mongoose = require('mongoose');

const portfolioItemSchema = new mongoose.Schema({
  section: { type: String, required: true },
  content: { type: mongoose.Schema.Types.Mixed, required: true }
});

module.exports = mongoose.model('PortfolioItem', portfolioItemSchema);
