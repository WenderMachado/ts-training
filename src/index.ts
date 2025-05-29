type Spaceship = {
  name: string
  pilot: string
  crewLimit: number
  crew: string[]
  inMission: boolean
}

const spaceships: Spaceship[] = []

function addSpaceship(name: string, pilot: string, crewLimit: number) {
  const spaceship: Spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false
  }

  spaceships.push(spaceship)
  alert(`A nave ${spaceship.name} foi registrada.`)
}

function findSpaceship(name: string): Spaceship | undefined {
  return spaceships.find((ship) => ship.name === name)
}

function addCrewMember(member: string, spaceship: Spaceship) {
  if (spaceship.crew.length >= spaceship.crewLimit) {
    alert(`${member} não pode ser adicionado à tripulação. Limite atingido.`)
  } else {
    spaceship.crew.push(member)
    alert(`${member} foi adicionado à tripulação da ${spaceship.name}`)
  }
}

function sendInMission(spaceship: {name: string, crewLimit: number, crew: string[], inMission:boolean}){
  if(spaceship.inMission){
    alert(`${spaceship.name} não pode ser enviada`)
  }else if(spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
    alert(`${spaceship.name} não pode ser enviada insuficiente`)
  }else{
    spaceship.inMission = true
    alert(`${spaceship.name} foi enviada`)
  }
}

function firstMenuOption(){
  const name = prompt (`qual o nome da nave a ser registrada?`) || ""
  const pilot = prompt (`qual o nome do piloto da ${name}`) || " "
  const crewLimit = Number(prompt (`suporta quantas cabeça?`))

  const confirmation = confirm (`quer adicionar a nave: ${name} com o piloto  ${pilot} com esse limite de tripulantes: ${crewLimit}`)

  if(confirmation){
    addSpaceship(name, pilot, crewLimit)
  }
}

function secondMenuOption() {
  const member = prompt('Qual é o nome do tripulante?') || ""
  const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado?`) || ""

  const spaceship = findSpaceship(spaceshipName)

  if (spaceship) {
    const confirmation = confirm(`Confirma a inclusão de ${member} na tripulação da ${spaceship.name}?`)

    if (confirmation) {
      addCrewMember(member, spaceship)
    }
  }
}

function thirdMenuOption() {
  const spaceshipName = prompt('Qual é o nome da nave a ser enviada?') || ""

  const spaceship = findSpaceship(spaceshipName);

  if (spaceship) {
    const confirmation = confirm(`Confirma e envio da ${spaceship.name} na missão?`)

    if (confirmation) {
      sendInMission(spaceship)
    }
  }
}