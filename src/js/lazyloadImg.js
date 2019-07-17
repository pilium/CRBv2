let lazyImages = [].slice.call(document.querySelectorAll('.lazy > source'));

if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window) {
	let lazyImageObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				let lazyImage = entry.target;

				lazyImage.srcset = lazyImage.dataset.srcset;
				lazyImage.nextElementSibling.srcset = lazyImage.dataset.srcset;
				lazyImage.parentElement.classList.remove('lazy');
				lazyImageObserver.unobserve(lazyImage);
			}
		});
	});

	lazyImages.forEach((lazyImage) => {
		lazyImageObserver.observe(lazyImage);
	});
} else {
	// Not supported, load all images immediately
	let active = false;

	// eslint-disable-next-line func-names
	const lazyLoad = function () {
		if (active === false) {
			active = true;
			setTimeout(() => {
				lazyImages.forEach((lazyImage) => {
					if (
						lazyImage.getBoundingClientRect().top <= window.innerHeight &&
						lazyImage.getBoundingClientRect().bottom >= 0 &&
						getComputedStyle(lazyImage).display !== 'none'
					) {
						lazyImage.srcset = lazyImage.dataset.srcset;
						lazyImage.nextElementSibling.src = lazyImage.dataset.srcset;
						lazyImage.parentElement.classList.remove('lazy');

						lazyImages = lazyImages.filter((image) => image !== lazyImage);

						if (lazyImages.length === 0) {
							document.removeEventListener('scroll', lazyLoad, {passive: true});
							window.removeEventListener('resize', lazyLoad);
							window.removeEventListener('orientationchange', lazyLoad);
						}
					}
				});

				active = false;
			}, 200);
		}
	};

	document.addEventListener('scroll', lazyLoad, {passive: true});
	window.addEventListener('resize', lazyLoad);
	window.addEventListener('orientationchange', lazyLoad);
}
