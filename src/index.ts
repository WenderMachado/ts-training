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