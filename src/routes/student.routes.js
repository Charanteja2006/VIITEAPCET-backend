import { Router } from "express";
import {registerStudent} from "../controllers/student.controllers.js";

const router = Router();


//public routes
router.route('/register').post(registerStudent);


export default router;

