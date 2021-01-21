const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
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

module.exports = router;
