const Park = function(name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = []
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  const index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(index, 1);
};

Park.prototype.findMostPopularDinosaur = function () {
  let numberOfVisitors = 0;
  let mostPopularDinosaur;
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > numberOfVisitors) {
      mostPopularDinosaur = dinosaur;
      numberOfVisitors = dinosaur.guestsAttractedPerDay;
    }
  }
  return mostPopularDinosaur;
};

Park.prototype.findDinosaursBySpecies = function (species) {
  let dinosaursBySpecies = []
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.species === species) {
      dinosaursBySpecies.push(dinosaur);
    }
  }
  return dinosaursBySpecies;
};

Park.prototype.visitorsPerDay = function () {
  let visitors = 0
  for (dinosaur of this.dinosaurs) {
    visitors += dinosaur.guestsAttractedPerDay;
  }
  return visitors
};

Park.prototype.visitorsPerYear = function () {
  const visitorsPerDay = this.visitorsPerDay();
  return (visitorsPerDay * 365);
};

Park.prototype.ticketRevenuePerYear = function () {
  const visitorsPerYear = this.visitorsPerYear();
  return (visitorsPerYear * this.ticketPrice);
};

Park.prototype.removeDinosaursBySpecies = function (species) {
  const dinosaursToRemove = this.findDinosaursBySpecies(species);
  for (dinosaur of dinosaursToRemove) {
    this.removeDinosaur(dinosaur);
  }
};

Park.prototype.showDietTypeNumbers = function () {
  let carnivores = 0;
  let herbivores = 0;
  let omnivores = 0;
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.diet === 'carnivore') {
      carnivores++;
    } else if (dinosaur.diet === 'herbivore') {
      herbivores++;
    } else if (dinosaur.diet === 'omnivore') {
      omnivores++;
    }
  }
  const dietTypeNumbers = { 'carnivores': carnivores, 'herbivores': herbivores, 'omnivores': omnivores };
  return dietTypeNumbers;
};

module.exports = Park
