var fibfind = function(max) {
	var old = 1;
	var mid = 1;
	var next = 1;
	var sum = 0;

	while (next < max) {
		old = mid;
		mid = next;
		next = old + mid;

		if (next % 2 === 0) {
			sum+=next;
		}
	}

	return sum;
}

var result = fibfind(4000000);

console.log(result);