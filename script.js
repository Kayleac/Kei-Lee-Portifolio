const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const btnFechar = document.querySelector('#btn-fechar-aviso');
const barraAviso = document.querySelector('#footer-aviso');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})
function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
}
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
}
if (btnFechar && barraAviso) {
    btnFechar.addEventListener('click', () => {
        barraAviso.style.display = 'none';
    });
}

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;
const themeIcon = document.querySelector('#icone-tema');
const imagensTrocaveis = document.querySelectorAll('.troca-tema');

function atualizarImagens(modoEscuroAtivo) {
    if (modoEscuroAtivo) {
        themeIcon.src = themeIcon.getAttribute('data-dark');
    } else {
        themeIcon.src = themeIcon.getAttribute('data-light');
    }

    imagensTrocaveis.forEach(img => {
        if (modoEscuroAtivo) {
            img.src = img.getAttribute('data-dark');
        } else {
            img.src = img.getAttribute('data-light');
        }
    });
}

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    atualizarImagens(true);
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const modoEscuroAtivo = body.classList.contains('dark-mode');
    atualizarImagens(modoEscuroAtivo);
    if (modoEscuroAtivo) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

const audio = document.getElementById("background-music");
const btn = document.getElementById("music-button");
// Pegamos a imagem que está dentro do botão
const btnImg = btn.querySelector("img"); 

btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btnImg.setAttribute('data-light', 'Imagens/pause.png');
    btnImg.setAttribute('data-dark', 'Imagens/pause-dark.png'); 
  } else {
    audio.pause();
    btnImg.setAttribute('data-light', 'Imagens/play-button.png');
    btnImg.setAttribute('data-dark', 'Imagens/play-button-dark.png');
  }

  const modoEscuroAtivo = document.body.classList.contains('dark-mode');
  atualizarImagens(modoEscuroAtivo);
});