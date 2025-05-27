import express from 'express';
import cors from 'cors';
import insurancePolicyRouter from './routes/insurance-policy.routes';

const app = express();

app.use(cors());
app.use('/insurance-policy', insurancePolicyRouter)

export default app;