const modalBtns = document.querySelectorAll('[data-modal-btn]');
const modals = document.querySelectorAll('[data-modal]');

function openModal(id) {
    modals.forEach(modal => modal.classList.remove('is-open'));
    modals.forEach(modal => {
        if (modal.getAttribute('data-modal') === id) {
            modal.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        }

    });

}

function closeModal(modal) {
    modal.classList.remove('is-open');
   document.body.style.overflow = '';
}

modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {  
        openModal(btn.getAttribute('data-modal-btn'))
    });
});

window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
});