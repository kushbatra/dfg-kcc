import express from 'express';
import { getAllRecommendations, getRecommendation, addRecommendation } from '../controllers/recommendations';
import { createPostValidator }  from '../helpers/validators';

const router = express.Router();

router.get('/getAll', getAllRecommendations);
router.get('/get', getRecommendation);
router.post('/add', createPostValidator, addRecommendation);

export default router;