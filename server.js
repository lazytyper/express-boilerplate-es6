import express from 'express';
const app = express();

const defaultPort = 3000;
const port = process.argv[2] || defaultPort;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

// include body-parser
import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// include css router
import scss2css from './routes/utils/scss2css.js';
app.use(scss2css);

// include routes
import routes from './routes/routes.js';

app.use('/', routes);

// include demo router
import demoRouter from './routes/demo/demo.js';
app.use('/demo', demoRouter);

// use pug
app.set('view engine', 'pug');

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
