import "./info-toggle.js";
import "./open-modal.js";
import "./open-faq-modal.js"

document.addEventListener("DOMContentLoaded", () => {
	const gallerySwiper = new Swiper('.gallary-swiper', {
		slidesPerView: 3,
		spaceBetween: 77,
		loop: false,
		navigation: {
			nextEl: '.gallary-button-next',
			prevEl: '.gallary-button-prev',
		}
	});
});
