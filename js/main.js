const controllers = document.querySelectorAll('.controle-ajuste')
const statistics = document.querySelectorAll('[data-statistic]')

const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

controllers.forEach(element => {
  element.addEventListener('click', (event) => {
    event.preventDefault()
    handleController(event.target.dataset.controller, event.target.parentNode)
    updateStatistic(event.target.dataset.part)
  })
});


function handleController(operation, controllerPart) {
  const robotPart = controllerPart.querySelector('[data-counter]')

  const execOperation = {'-' : subtractPartOnRobot, '+': addPartOnRobot}
  
  if(!!operation) execOperation[operation](robotPart)
  else console.log('Operação não encontrada.')
}

function addPartOnRobot(partRobot) {
  partRobot.value++
}

function subtractPartOnRobot(partRobot) {
  if (parseInt(partRobot.value) > 0)
  partRobot.value--
}

function updateStatistic(part) {

}


