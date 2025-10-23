// con questo foglio JS voglio selezionare il box, selezionare il bottone
// e fare in modo che al click del bottone venga assegnata al box la classe "start"

// prendo il button
const button = document.getElementById('start-button')

// prendo il box
// document.getElementsByClassName('box')[0]
const box = document.querySelector('.box')

button.addEventListener('click', () => {
  // assegno al box la class CSS "start"
  box.classList.add(
    'start'
  ) /* ai click successivi JS cerca di ridarla, ma non è un problema */

  if (button.innerText === 'START') {
    // qui entro se il box era fermo
    box.style.animationPlayState = 'running'
    button.innerText = 'STOP'
  } else {
    // qui entro se il box si stava muovendo
    box.style.animationPlayState = 'paused'
    button.innerText = 'START'
  }
})
