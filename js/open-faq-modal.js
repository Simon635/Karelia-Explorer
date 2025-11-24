window.addEventListener('DOMContentLoaded', () => {
	const openBtn = document.querySelector('.question');
	const modal = document.getElementById('modalFaqOverlay');
	const closeBtn = document.getElementById('modalFaqClose');
	const sendBtn = document.querySelector('.modal-faq-btn'); // ← кнопка "Отправить"

	if (!openBtn || !modal || !closeBtn || !sendBtn) return;

	openBtn.addEventListener('click', () => {
		modal.classList.add('active');
	});

	closeBtn.addEventListener('click', () => {
		modal.classList.remove('active');
	});

	sendBtn.addEventListener('click', (e) => {
		e.preventDefault();      // чтобы форма не перезагружала страницу
		modal.classList.remove('active'); // закрыть модалку
	});

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			modal.classList.remove('active');
		}
	});
});

