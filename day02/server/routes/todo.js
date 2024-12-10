var express = require('express');
var router = express.Router();

router.get('/list', function (req, res, next) {
  res.json([
    {
      id: 0,
      content: '리액트 스쳐지나 가듯 살짝만 맛보기',
      done: false,
    },
    {
      id: 1,
      content: '쌍근 만들기',
      done: false,
    },
  ]);
});

module.exports = router;
