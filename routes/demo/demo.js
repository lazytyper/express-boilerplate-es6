import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('demo/index', { title: 'Express Demo' });
});

router.get('/ajax-get', function (req, res, next) {
	res.json({
		message: 'Hello World!',
		req: req.query
	});
});

router.post('/ajax-post', function (req, res, next) {
	res.json({
		message: 'Hello World!',
		req: req.body
	});
});

export default router;
