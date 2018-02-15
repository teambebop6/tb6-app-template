import express from 'express';
import auth from './auth';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    result: 'Welcome to TB6.'
  });
});

router.use('/auth', auth);

module.exports = router;
