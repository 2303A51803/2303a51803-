
const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');

router.get('/', async (req,res)=>{
  const data = await Notification.find();
  res.json(data);
});

router.post('/', async (req,res)=>{
  const notification = await Notification.create(req.body);
  res.status(201).json(notification);
});

module.exports = router;
