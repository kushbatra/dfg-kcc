import express from 'express';
import { getActivities } from '../controllers/activity';

const router = express.Router();
console.log('activityRoute');
router.get('/get', getActivities);

export default router;