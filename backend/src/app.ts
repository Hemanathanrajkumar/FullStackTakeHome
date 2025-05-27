import express from 'express';
import cors from 'cors';
import insurancePolicyRouter from './routes/insurance-policy.routes';
import path from 'path';

const app = express();

app.use(cors());
app.use('/insurance-policy', insurancePolicyRouter)


// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for Angular routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
export default app;