const petsArray = [
  {
    imageLink: "https://i.pinimg.com/originals/f0/85/a6/f085a613fd9e4f8e5a128527bf5993c0.jpg",
    imageDescription: "ya boy gidget",
    name: 'Gidget',
    color: 'Grilled Beef Brown',
    skill: 'Bilingual',
    type: 'Dog',
    category: 'Dog',
    display: ''
  },
  {
    imageLink: "https://modernfarmer.com/wp-content/uploads/2014/12/shrekfeature.jpg",
    imageDescription: "it's donkey from shrek",
    name: 'Donkey',
    color: 'Swamp Brown',
    skill: 'Partfait making',
    type: 'DON-KEH',
    category: 'Other',
    display: ''
  },
  {
    imageLink: "https://vignette.wikia.nocookie.net/tmnt-x-pokemon/images/8/8a/Jake_the_Dog.jpg/revision/latest/scale-to-width-down/340?cb=20180708012258",
    imageDescription: "jake the dog",
    name: 'Jake',
    color: 'Spicy Mustard Yellow',
    skill: 'Hella stretchy',
    type: 'Dog',
    category: 'Dog',
    display: ''
  },
  {
    imageLink: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/14/11/dolly-the-sheep.jpg?w968h681",
    imageDescription: "baaaaaaaaaa",
    name: 'Dolly',
    color: 'Wooly White',
    skill: 'Interchangeable',
    type: 'Sheep',
    category: 'Other',
    display: ''
  },
  {
    imageLink: "https://media0.giphy.com/media/10RhccNxPSaglW/source.gif",
    imageDescription: "a cat on the casio",
    name: 'Keyboard Cat',
    color: 'A Capella Orange',
    skill: 'Absolutely shreds',
    type: 'Cat',
    category: 'Cat',
    display: ''
  },
  {
    imageLink: "https://images.squarespace-cdn.com/content/v1/5963bd771e5b6c97155e738b/1535042176897-O0RT9INIXHEB2GX5LAUU/ke17ZwdGBToddI8pDm48kGf0STK5BHh00bFDSVOoApUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcgZAOyUfjQ9ceXpmliXw51wnX6eNj_Cu-EdsHm6Ng4hkhCPKYLl3t9vnURsqIKtYL/garfield.jpeg",
    imageDescription: "monday's worst enemy",
    name: 'Garfield',
    color: 'Lasagna Smoothie Orange',
    skill: 'Demonic Transformation',
    type: 'Cat',
    category: 'Cat',
    display: ''
  },
  {
    imageLink: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/14/11/dolly-the-sheep.jpg?w968h681",
    imageDescription: "it's a CLONE is the JOKE",
    name: 'Dolly',
    color: 'Wooly White',
    skill: 'Interchangeable',
    type: 'Sheep',
    category: 'Other',
    display: ''
  }
];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const petLoop = () => {
let domString = '';

for (let i = 0; i < petsArray.length; i++) {
  domString +=  `<div class="animal-card" style="display: ${petsArray[i].display};">
                  <header class="animal-header">
                    <img src= "${petsArray[i].imageLink}" alt= "${petsArray[i].imageDescription}">
                   <h1>${petsArray[i].name}</h1>
                  </header>
                  <div class="bodysection">
                    <div class="color">
                      <p class="colorCategory">Color: &nbsp</p>
                      <p class="animalColor">${petsArray[i].color}</p>
                  </div>
                  <div class="skill">
                    <p class="skillCategory">Special Skill: &nbsp</p>
                    <p class="specialSkill">${petsArray[i].skill}</p>
                  </div>
                  <div class="type">
                    <p class="typeCategory">Type of Pet: &nbsp</p>
                    <p class="petType" value='${petsArray[i].category}'>${petsArray[i].type}</p>
                  </div>
                </div>
              </div>`;
  }
  printToDom('.cards', domString)
}

const filterButton = (filterCategory) => {
  for (let i=0; i < petsArray.length; i++) {
    if (petsArray[i].category != filterCategory) {
      petsArray[i].display = 'none'
    } else {
      petsArray[i].display = ''
    }
  }
  console.log(petsArray)
  petLoop()
}

const noFilter = () => {
  for (let i=0; i < petsArray.length; i++) {
    petsArray[i].display = ''
  }
  petLoop()
}

const init = () => {
  petLoop();
}

init();
