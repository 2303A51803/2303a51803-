
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  type: { type: String, enum:['Placement','Result','Event'], required:true },
  message: { type: String, required:true },
  isRead: { type:Boolean, default:false }
},{timestamps:true});

module.exports = mongoose.model('Notification', notificationSchema);
