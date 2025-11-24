const tabButtons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
	btn.addEventListener("click", () => {
		const tab = btn.dataset.tab;

		// убираем активность
		tabButtons.forEach(b => b.classList.remove("active"));
		contents.forEach(c => c.classList.remove("active"));

		// добавляем активность выбранным элементам
		btn.classList.add("active");
		document.getElementById(tab).classList.add("active");
	});
});
