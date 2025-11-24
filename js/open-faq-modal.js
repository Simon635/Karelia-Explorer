window.addEventListener('DOMContentLoaded', () => {
	const openBtn = document.querySelector('.question');
	const modal = document.getElementById('modalFaqOverlay');
	const closeBtn = document.getElementById('modalFaqClose');

	if (!openBtn || !modal || !closeBtn) return;

	openBtn.addEventListener('click', () => {
		modal.classList.add('active');
	});

	closeBtn.addEventListener('click', () => {
		modal.classList.remove('active');
	});

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			modal.classList.remove('active');
		}
	});
});
