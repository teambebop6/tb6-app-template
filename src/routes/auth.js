/**
 * Created by Henry Huang.
 */
import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
  res.json({
    result: 'login successful!'
  });
});

router.post('/logout', (req, res) => {
  res.json({
    result: 'logout successful!'
  });
});

module.exports = router;

