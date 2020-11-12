import express from 'express';
import { getAllRecommendations, addRecommendation } from '../controllers/recommendations';
import { createPostValidator }  from '../helpers/validators';

const router = express.Router();

router.get('/get', getAllRecommendations);
router.post('/add', createPostValidator, addRecommendation);

export default router;