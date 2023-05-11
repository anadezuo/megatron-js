const controllers = document.querySelectorAll('.controle-ajuste')
const statistics = document.querySelectorAll('[data-statistics]')

const parts = {
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

   const operation = event.target.dataset.controller

   handleStatistics(operation, event.target.dataset.part, event.target.parentNode)
   handleController(operation, event.target.parentNode)
  })
});


function handleController(operation, partRobot) {
  const robotPart = partRobot.querySelector('[data-counter]')
  const execOperation = {'-' : removePartOnRobot, '+': addPartOnRobot}
  
  if(!!operation) {
    execOperation[operation](robotPart)
  }
  else console.log('Operação não encontrada.')
}

function addPartOnRobot(partRobot) {
  partRobot.value++
}

function removePartOnRobot(partRobot) {
  if (parseInt(partRobot.value) > 0)
    partRobot.value--
}

function handleStatistics(operation, robotPart, counter){
  const robotPartCount = counter.querySelector('[data-counter]')
  const execOperation = {'-': removeStatistic, '+': addStatistic}

  if(!!operation) {
    execOperation[operation](robotPart, robotPartCount)
  }
  else console.log('Estatística não encontrada.')
}

function addStatistic(robotPart) {
  console.log(robotPart)
  statistics.forEach(element => {
    element.textContent = parseInt(element.textContent) + parts[robotPart][element.dataset.statistics]
  })
}

function removeStatistic(robotPart, robotPartCount) {
  if (parseInt(robotPartCount.value) > 0)
    statistics.forEach(element => {
      element.textContent = parseInt(element.textContent) - parts[robotPart][element.dataset.statistics]
    })
}


