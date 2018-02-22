import express from 'express';
import jwt from 'express-jwt';
import auth from './auth';
import adminRouter from './admin';
// Load subroutes
import config from "../config";

const router = express.Router();

// Initialize subroutes
// TODO currently only admin, so only check token is valid, do not check the role is admin or not
router.use('/admin', jwt({ secret: config.token.secret }), adminRouter);

router.get('/', (req, res) => {
  res.json({
    result: 'Welcome to TB6.'
  });
});

router.use('/auth', auth);

module.exports = router;
