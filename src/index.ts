let spaceGarage = []

function saveSpaceship(name: string, pilot: string, crewLimit: number){
 
  const newNave = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false
  }
 
  spaceGarage.push(newNave)
  alert(`a nave ${newNave.name} foi enviada`)



}


function sendSpaceship(name:string, captain:string) {
  const spaceship = {
    name, 
    captain,
    speed: 20,
    inMission: true,
    crew: []
  }
  alert(`a nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi evidada para uma missao`) 
  return spaceship
}

function accelerate(targetSpeed: number, spaceship:{name: string, speed: number}){
  if(spaceship.speed > targetSpeed){
    alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}`)
  }else if (spaceship.speed < targetSpeed){
    alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`)
  }else{
    alert(`mantenado a velocidade da ${spaceship.name}`)
  }
}

const spaceshipName = prompt(`insira o nome da nave a ser enviada`) || ""
const spaceshipCaptain = prompt(`insira o nome do capitão da nave`) || ""
if (spaceshipName === null || spaceshipCaptain === null) {
  alert("Operação cancelada! Nome da nave ou capitão não inseridos.")
} 

const currentSpaceship = sendSpaceship(spaceshipName, spaceshipCaptain);
const speed = parseFloat(prompt(`insira a velocidade a qual deseja acelerar`) || "")
accelerate(speed, currentSpaceship)

console.log(`logo`)