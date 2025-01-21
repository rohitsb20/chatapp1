import  express from 'express';
import { getSidebarUsers } from 
'../controllers/user.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();


router.get("/", protectRoute,getSidebarUsers);

export default router;