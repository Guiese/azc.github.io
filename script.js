// Mostrar modal al hacer clic en una imagen
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.getElementsByClassName('close')[0];

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = item.querySelector('img').src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Animación al hacer scroll
const galleryItemElements = document.querySelectorAll('.gallery-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.1 });

galleryItemElements.forEach(item => {
    observer.observe(item);
});



