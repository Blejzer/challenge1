const Skier = require('../src/models/skier.model');
const Resort = require('../src/models/resort.model');

const skiersForChallenge = [
  {
    name: 'Nedim'
  },
  {
    name: 'Edhem'
  },
  {
    name: 'Nikola'
  }
]
const resortsForChallenge = [
  {
    name: 'Bjelasnica'
  },
  {
    name: 'Jahorina'
  },
  {
    name: 'Igman'
  }
]

const seed = () => {

  return Skier.bulkCreate(skiersForChallenge)
  .then(() => {
    return Resort.bulkCreate(resortsForChallenge);
  })

}
seed()
.then(() =>{
  process.exit();
});
