const button = document.getElementById('botao');
const fecha = document.querySelector('.fechar-modal')

button.addEventListener('click', function(e){
    e.preventDefault();
    console.log('cliclou')
    setClassAberto();
    //setClassFechaModal()
})
fecha.addEventListener('click', function(){
    console.log('clickoufecha')
    setClassFechaModal()
})

function setClassAberto(){
    const aberto = document.querySelector('.modal');
    aberto.classList.add('aberto')
}

function setClassFechaModal(){
    const aberto = document.querySelector('.modal');
    aberto.classList.remove('aberto')
}