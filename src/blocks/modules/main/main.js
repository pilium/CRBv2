/* eslint-disable func-names */
// /* eslint-disable no-console */
// Test async/await
function resolveAfter2Seconds(x) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(x);
		}, 2000);
	});
}

async function add1(x) {
	const a = await resolveAfter2Seconds(20);
	const b = await resolveAfter2Seconds(30);

	return x + a + b;
}

add1(10).then((v) => {
	console.log(v); // prints 60 after 4 seconds.
});

async function add2(x) {
	const a = resolveAfter2Seconds(20);
	const b = resolveAfter2Seconds(30);

	return x + await a + await b;
}

add2(10).then((v) => {
	console.log(v); // prints 60 after 2 seconds.
});
