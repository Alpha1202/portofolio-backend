import express from 'express';
import mailRoute from './mailRoute';

const router = express.Router()

router.use('/api/v1', mailRoute)

export default router;