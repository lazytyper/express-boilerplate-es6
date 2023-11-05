function get(url, params) {
	const queryParams = new URLSearchParams(params);
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url + '?' + queryParams.toString());
		xhr.onload = function() {
			if (xhr.status === 200) {
				resolve(xhr.responseText);
			} else {
				reject(xhr.statusText);
			}
		};
		xhr.onerror = function() {
			reject(xhr.statusText);
		};
		xhr.send();
	});
}

function post(url, params) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', url);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onload = function() {
			if (xhr.status === 200) {
				resolve(xhr.responseText);
			} else {
				reject(xhr.statusText);
			}
		};
		xhr.onerror = function() {
			reject(xhr.statusText);
		};
		xhr.send(JSON.stringify(params));
	});
}

export {get, post}
