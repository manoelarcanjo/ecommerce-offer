const closeModal = document.querySelector('#closeModal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

function toggleModal() {
    modal.classList.toggle('hide');
    fade.classList.toggle('hide');
}

[closeModal, fade].forEach((el) => {
    el.addEventListener('click', () => toggleModal())
});




