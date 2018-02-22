/**
 * Created by Henry Huang.
 */
import express from 'express';
import crudTemplateRouter from './crudTemplate';

const router = express.Router();

router.use('/crudTemplate', crudTemplateRouter);

export default router;