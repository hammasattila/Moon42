import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { InterviewRouter } from './api/routes/interview';

dotenv.config();
const port: string | number = process.env.PORT || 8000;
let app = express();

app.listen(port, () => {
    console.log(`🚀 API is listening at http://localhost:${port}.`);
})

app.use(cors());
app.use('/api', InterviewRouter);