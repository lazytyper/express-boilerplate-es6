import  { get, post } from './utils/ajax.js';

function testGet() {
	get('/demo/ajax-get', {message: 'Get Demo'}).then(function(data) {
		console.log(data);
		testPost();
	}).catch(function(error) {
		console.log(error);
	});
}

function testPost() {
	post('/demo/ajax-post', {message: 'Post Demo'}).then(function(data) {
		console.log(data);
	}).catch(function(error) {
		console.log(error);
	});
}

document.addEventListener('DOMContentLoaded', testGet);
