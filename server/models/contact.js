// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  userId:{type:String},
  name: { type: String, required: true },
  phone: {type: Number, required: true},
  email: { type: String, required: true, match: /.+\@.+\..+/ }, // Basic email validation
  message: { type: String, required: true },
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
