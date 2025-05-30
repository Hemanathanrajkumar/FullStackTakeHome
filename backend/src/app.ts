import express from 'express';
import cors from 'cors';
import insurancePolicyRouter from './routes/insurance-policy.routes';
import path from 'path';

const app = express();

app.use(cors());

// app.use(express.static(path.join(__dirname, 'public')));
console.log('Static Path:', path.join(__dirname, '../public'));

app.use('/', express.static(path.join(__dirname, '../public')));

// API routes — add these BEFORE the wildcard route
app.use('/api', insurancePolicyRouter);
console.log('Adding fallback wildcard route');

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Wildcard fallback — only for non-API routes (Angular routes)
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.use('/static', express.static(path.join(__dirname, 'public')))
export default app;