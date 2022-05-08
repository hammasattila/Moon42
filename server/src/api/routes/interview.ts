import { Router } from "express";
import * as MagicController from '../controllers/interview';


export let InterviewRouter: Router = Router()
    .get('/magic', MagicController.magic);