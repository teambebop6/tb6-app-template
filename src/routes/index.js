import express from 'express';

// Load subroutes
import admin_router from './admin'

const router = express.Router();




// Initialize subroutes
router.use('/admin', admin_router)

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to TB6.'
  });
});

module.exports = router;
