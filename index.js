const topico = 'Mudança fundo do BackGround'
document.getElementById('topico').innerHTML = topico;


function imprime(resultado,expressao,texto){
    return (
        document.getElementById('tela').innerHTML = resultado,
        document.getElementById('expr').innerHTML = expressao,
        document.getElementById('texto').innerHTML = texto
    )
}

const cor = [
    {id:1, cor:'verde',cod: '#31ff4E',end:'foto1.jpg'},
    {id:2, cor:'cinza',cod: '#363363',end:'foto2.jpg'},
    {id:3, cor:'azul',cod: '#0000FF',end:'foto3.jpg'},
    {id:4, cor:'aqual',cod: '#7FFD4',end:'foto4.jpg'},
    {id:5, cor:'verde',cod:'00FA9A',end:'foto5.jpg'} 
]

console.log('passa aqui')

function muda(){
    var i = getRandomArbitrary(0,5)
    i= i.toFixed(0)
   
    fundo = document.getElementById('fundo')

    //imprime(cor[i].cor,cor[i].cod,'Essa é a cor de fundo e seu código')
    //fundo.style.backgroundColor = cor[i].cod
    fundo.style.backgroundImage = 'url('+cor[i].end+')'

  console.log('url('+cor[1].end+')')
    
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

 
function imprime(resultado,expressao,texto){
        return (
            document.getElementById('tela').innerHTML = expressao,
            document.getElementById('expr').innerHTML = texto,
            document.getElementById('texto').innerHTML = resultado
        )}