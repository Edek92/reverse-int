module.exports = function reverse (n) {
	let module;
	let arr1 = [];
	let arr2 = [];

	if (n < 0) {
		module = n * -1;
	} else {
		module = n;
	};

	arr1 = String(module).split('');

  	for (let i = arr1.length - 1; i >= 0; i--) {
		arr2.push(arr1[i]);
  	}

	return Number(arr2.join(''));
}