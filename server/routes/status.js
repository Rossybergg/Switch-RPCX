import { updateStatus } from '../server';

const router = require('express').Router();

router.post('/update', (req, res) => {
  const { title, image } = req.body;

  try {
    updateStatus(title, image);
    res.status(200).send('Status updated');
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
