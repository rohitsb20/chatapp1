import  express from 'express';
import {getSidebarUsers} from '../controllers/user.controller.js';

const router = express.Router();


router.get("/", getSidebarUsers);

export default router;