import express from 'express';
import auth from './auth';

// Load subroutes
import admin_crud_router from './admin/crudTemplate'

const router = express.Router();

// Initialize subroutes
router.use('/admin/crudTemplate', admin_crud_router)

router.get('/', (req, res) => {
  res.json({
    result: 'Welcome to TB6.'
  });
});

router.use('/auth', auth);

module.exports = router;
