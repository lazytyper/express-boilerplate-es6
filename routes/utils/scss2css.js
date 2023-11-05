import express from 'express';
import sass from 'node-sass';
import path from 'path';
import fs from 'fs';

const scssPath = path.join(path.dirname(path.dirname(path.dirname(import.meta.url.replace('file://', '')))), 'styles');
console.log(scssPath);
const router = express.Router();

const compiledCss = {};

const getCss = (scssFile) => {
	return sass.renderSync({
		file: path.join(scssPath, scssFile),
		outputStyle: 'compressed',
		includePaths: [scssPath]
	}).css.toString();
};

router.get('/styles/:filename.css', (req, res, next) => {
	const scssFile = req.params.filename + '.scss';
	if (fs.existsSync(path.join(scssPath, scssFile))) {
		const fileTime = fs.statSync(path.join(scssPath, scssFile)).mtimeMs;
		if (compiledCss[scssFile] && compiledCss[scssFile].fileTime === fileTime) {
		} else {
			compiledCss[scssFile] = {
				fileTime: fileTime,
				css: getCss(scssFile)
			};
		}
		res.set('Content-Type', 'text/css');
		res.send(compiledCss[scssFile].css);
	} else {
		next();
	}
});

export default router;
