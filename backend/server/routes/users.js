import express from 'express';
const router = express.Router();

const users = [];

/* GET home page. */
router.get('/users', function(req, res, next) {
   // res.render('index', { title: 'Express' });
   console.log('/api/users called');
   res.json(users);
});

router.post('/user', (req, res) => {
    const user = req.body.user;
    console.log('Adding user::::', user);
    users.push(user);
    res.json('user added');
});

export default router;
