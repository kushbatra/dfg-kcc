import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    // Uncomment the following when building for production
    // res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
    console.log("Index page hit");
    res.sendFile(path.join(__dirname, '../../../frontend/build/index.html'));
});
export default router;