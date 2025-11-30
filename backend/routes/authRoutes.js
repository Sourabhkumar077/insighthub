
import express from 'express';
const router = express.Router();
import protect from '../middleware/authMiddleware.js'; 

// import the controller function
import { signupUser, loginUser } from '../controllers/authController.js';

// signup route
router.post('/signup', signupUser);

// login route
router.post('/login', loginUser);

// Protected route: /auth/me
router.get('/me', protect, (req, res) => {
    res.json({
        msg: "Authenticated user details",
        user: req.user   // comes from protect middleware
    });
});

// module.exports = router;
export default router ;

