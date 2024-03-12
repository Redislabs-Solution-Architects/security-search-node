import { Router } from 'express';

export const router = Router();

router.get('/load', async (req, res) => {
  console.log(`Load data and index`);
  res.send('Loaded and indexed data');

});

router.get('/search', async (req, res) => {
  const term = req.get('term');

  console.log(`Search with term ${term}`);
  res.send('Search results');
});
