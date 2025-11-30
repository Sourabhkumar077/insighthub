
import express from 'express';
const router = express.Router();
// import protect from '../middleware/authMiddleware'; - currently not used

// import the controller function
import { signupUser, loginUser } from '../controllers/authController.js';

// signup route
router.post('/signup', signupUser);

// login route
router.post('/login', loginUser);

// module.exports = router;
export default router ;

