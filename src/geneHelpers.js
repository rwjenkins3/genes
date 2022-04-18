const clan = [
    { gene: '0000', name: 'Shoshin', img: '' },
    { gene: '0001', name: 'Shaolin', img: '' },
    { gene: '0010', name: 'Shinobi', img: '' },
    { gene: '0011', name: 'White Crane', img: '' },
    { gene: '0100', name: 'Tengu', img: '' },
    { gene: '0101', name: 'Ronin', img: '' },
    { gene: '0110', name: 'Monk', img: '' },
    { gene: '0111', name: 'Shuri', img: '' },
    { gene: '1000', name: 'Naha', img: '' },
];
const subclass = [];

const eyes = [
    { gene: '0000', name: 'eyes_1', img: '' },
    { gene: '0001', name: 'eyes_2', img: '' },
    { gene: '0010', name: 'eyes_3', img: '' },
    { gene: '0011', name: 'eyes_4', img: '' },
    { gene: '0100', name: 'eyes_5', img: '' },
    { gene: '0101', name: 'eyes_6', img: '' },
    { gene: '0110', name: 'eyes_7', img: '' },
    { gene: '0111', name: 'eyes_8', img: '' },
];

const hair = [
    { gene: '0000', name: 'hair_1', img: '' },
    { gene: '0001', name: 'hair_2', img: '' },
    { gene: '0010', name: 'hair_3', img: '' },
    { gene: '0011', name: 'hair_4', img: '' },
    { gene: '0100', name: 'hair_5', img: '' },
    { gene: '0101', name: 'hair_6', img: '' },
    { gene: '0110', name: 'hair_7', img: '' },
    { gene: '0111', name: 'hair_8', img: '' },
];

const mouth = [
    { gene: '0000', name: 'mouth_1', img: '' },
    { gene: '0001', name: 'mouth_2', img: '' },
    { gene: '0010', name: 'mouth_3', img: '' },
    { gene: '0011', name: 'mouth_4', img: '' },
    { gene: '0100', name: 'mouth_5', img: '' },
    { gene: '0101', name: 'mouth_6', img: '' },
    { gene: '0110', name: 'mouth_7', img: '' },
    { gene: '0111', name: 'mouth_8', img: '' },
];

const uniform = [
    { gene: '0000', name: 'uniform_1', img: '' },
    { gene: '0001', name: 'uniform_2', img: '' },
    { gene: '0010', name: 'uniform_3', img: '' },
    { gene: '0011', name: 'uniform_4', img: '' },
    { gene: '0100', name: 'uniform_5', img: '' },
    { gene: '0101', name: 'uniform_6', img: '' },
    { gene: '0110', name: 'uniform_7', img: '' },
    { gene: '0111', name: 'uniform_8', img: '' },
];

const weapon = [    
    { gene: '0000', name: 'weapon_1', img: '' },
    { gene: '0001', name: 'weapon_2', img: '' },
    { gene: '0010', name: 'weapon_3', img: '' },
    { gene: '0011', name: 'weapon_4', img: '' },
    { gene: '0100', name: 'weapon_5', img: '' },
    { gene: '0101', name: 'weapon_6', img: '' },
    { gene: '0110', name: 'weapon_7', img: '' },
    { gene: '0111', name: 'weapon_8', img: '' },
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const getRandomFighter = () => {
    let zeroPad = '0000000000000000000000000000000000000000';

    let dna = zeroPad + clan[getRandomInt(10)].gene;

    dna += eyes[getRandomInt(9)].gene;
    dna += hair[getRandomInt(9)].gene;
    dna += mouth[getRandomInt(9)].gene;
    dna += uniform[getRandomInt(9)].gene;
    dna += weapon[getRandomInt(9)].gene;

    return dna;

}

const getClan = (dna) => {
    let index = 40;
    let gene = dna.slice(index, index+4);
    console.log(gene);

    let selected = clan.filter((one) => {
        return one.gene === gene;
    })

    return selected[0];
}


export { getRandomFighter, getClan }