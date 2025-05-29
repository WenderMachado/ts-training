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