document.querySelector(".form-button").onclick = () => {
	document.getElementById("modalOverlay").classList.add("active");
};

document.getElementById("modalClose").onclick = () => {
	document.getElementById("modalOverlay").classList.remove("active");
};

document.getElementById("modalOverlay").onclick = (e) => {
	if (e.target === e.currentTarget) {
		e.currentTarget.classList.remove("active");
	}
};

const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalOk = document.querySelector(".modal-btn");

function closeModal() {
	modalOverlay.classList.remove("active");
}

modalClose.addEventListener("click", closeModal);

modalOk.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
	if (e.target === modalOverlay) {
		closeModal();
	}
});

