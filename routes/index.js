const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/test', async (req, res, next) => {
  res.json({ success: true, msg: 'See also https://github.com/nvbach91/twitter-api-proxy' });
});

router.post('/', async (req, res) => {
  const axiosConfig = {
    headers: {
      'Authorization': `Bearer ${req.body.BEARER_TOKEN}`
    }
  };
  try {
    const resp = await axios.get(req.body.url, axiosConfig);
    console.log(resp.data);
    res.json({ success: true, msg: resp.data });
  } catch (e) {
    console.error(e.response ? e.response.data : e);
    res.json({ success: false, msg: e.response ? e.response.data : e.message });
  }
});

router.get('/', (req, res) => {
  res.json({ success: false, msg: 'See also https://github.com/nvbach91/twitter-api-proxy' });
});

module.exports = router;
