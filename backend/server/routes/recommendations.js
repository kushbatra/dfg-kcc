import express from 'express';
import { getAllRecommendations } from '../controllers/recommendations';

const router = express.Router();

router.get('/get', getAllRecommendations);

export default router;