/* eslint-disable promise/catch-or-return */
const testimonialsCont = document.querySelector('.testimonials');
const query = `
  query {
	testimonials {
	  id
	  name
	  text
	  date
	}
  }
`;

function renderList(json) {
	const testimonials = json.data.testimonials;

	return `
		${testimonials
		.map(
			(testimonial) =>
				`<li>
					<blockquote class="testimonials__block">
						<p>
							${testimonial.text}
						</p>
						<footer>
						<cite class="testimonials__cite">
							<span class="testimonials__name">${testimonial.name}</span>
							<span class="testimonials__date">${testimonial.date}</span>
						</cite>
						</footer>
					</blockquote>
				</li>`
		)
		.join('')}
	`;
}

async function fetchTopFive() {
	const URL = 'https://crb-tesst.herokuapp.com/graphql';
	const fetchResult = fetch(
		new Request(URL, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				operationName: null,
				query,
			}),
			cache: 'reload',
		})
	);
	const response = await fetchResult;

	if (response.ok) {
		const jsonData = await response.json();

		try {
			testimonialsCont.innerHTML = renderList(jsonData);
		} catch (e) {
			testimonialsCont.innerHTML = e;
		}
	}
}

fetchTopFive();
