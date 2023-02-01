const btnTrailer = document.getElementById('botao');
const btnFecha = document.querySelector('.fechar-modal')
const aberto = document.querySelector('.modal');
const video = document.getElementById('video');
const linkVideo = video.src

btnTrailer.addEventListener('click', (e) => {
    e.preventDefault();
    setClassAberto();
    
})
btnFecha.addEventListener('click', () => {
    setClassFechaModal()
})

function setClassAberto(){
    alternaMOdal()
    video.setAttribute('src', linkVideo);
};

function setClassFechaModal(){
    video.setAttribute('src', '');
    alternaMOdal()
};

function alternaMOdal(){
    aberto.classList.toggle('aberto')
};