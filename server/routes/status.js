const router = require('express').Router();
import { updateStatus } from '../../src/services/discord/DiscordService';

router.post('/update', (req, res) => {
  const {game, image} = req.body;

  try {
    updateStatus(game, image);
    res.status(200).send('Status updated');
  } catch (error) {
    res.status(500).send(error);
  }
})

module.exports = router;