import express from 'express';
import auth from './auth';

// Load subroutes
import admin_router from './admin'

const router = express.Router();




// Initialize subroutes
router.use('/admin', admin_router)

router.get('/', (req, res) => {
  res.json({
    result: 'Welcome to TB6.'
  });
});

router.use('/auth', auth);

module.exports = router;
