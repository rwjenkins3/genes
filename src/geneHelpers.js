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
const base = [
    { gene: '0000', name: 'body_1', img: '/images/base-1.png', hands: '/images/hands-1.png' },
    { gene: '0001', name: 'body_2', img: '/images/base-1.png', hands: '/images/hands-1.png' },
    { gene: '0010', name: 'body_3', img: '/images/base-2.png', hands: '/images/hands-2.png' },
    { gene: '0011', name: 'body_4', img: '/images/base-2.png', hands: '/images/hands-2.png' },
    { gene: '0100', name: 'body_5', img: '/images/base-2.png', hands: '/images/hands-2.png' },
    { gene: '0101', name: 'body_6', img: '/images/base-3.png', hands: '/images/hands-3.png' },
    { gene: '0110', name: 'body_7', img: '/images/base-3.png', hands: '/images/hands-3.png' },
    { gene: '0111', name: 'body_8', img: '/images/base-3.png', hands: '/images/hands-3.png' },
];

const eyes = [
    { gene: '0000', name: 'eyes_1', img: '/images/eyes-1.png' },
    { gene: '0001', name: 'eyes_2', img: '/images/eyes-2.png' },
    { gene: '0010', name: 'eyes_3', img: '/images/eyes-3.png' },
    { gene: '0011', name: 'eyes_4', img: '/images/eyes-4.png' },
    { gene: '0100', name: 'eyes_5', img: '/images/eyes-5.png' },
    { gene: '0101', name: 'eyes_6', img: '/images/eyes-6.png' },
    { gene: '0110', name: 'eyes_7', img: '/images/eyes-7.png' },
    { gene: '0111', name: 'eyes_8', img: '/images/eyes-8.png' },
];

const hair = [
    { gene: '0000', name: 'hair_1', img: '/images/hair-1.png' },
    { gene: '0001', name: 'hair_2', img: '/images/hair-2.png' },
    { gene: '0010', name: 'hair_3', img: '/images/hair-3.png' },
    { gene: '0011', name: 'hair_4', img: '/images/hair-4.png' },
    { gene: '0100', name: 'hair_5', img: '/images/hair-5.png' },
    { gene: '0101', name: 'hair_6', img: '/images/hair-6.png' },
    { gene: '0110', name: 'hair_7', img: '/images/hair-7.png' },
    { gene: '0111', name: 'hair_8', img: '/images/hair-8.png' },
];

const mouth = [
    { gene: '0000', name: 'mouth_1', img: '/images/mouth-1.png' },
    { gene: '0001', name: 'mouth_2', img: '/images/mouth-2.png' },
    { gene: '0010', name: 'mouth_3', img: '/images/mouth-3.png' },
    { gene: '0011', name: 'mouth_4', img: '/images/mouth-4.png' },
    { gene: '0100', name: 'mouth_5', img: '/images/mouth-1.png' },
    { gene: '0101', name: 'mouth_6', img: '/images/mouth-2.png' },
    { gene: '0110', name: 'mouth_7', img: '/images/mouth-3.png' },
    { gene: '0111', name: 'mouth_8', img: '/images/mouth-4.png' },
];

const uniform = [
    { gene: '0000', name: 'uniform_1', img: '/images/uni-1.png' },
    { gene: '0001', name: 'uniform_2', img: '/images/uni-2.png' },
    { gene: '0010', name: 'uniform_3', img: '/images/uni-3.png' },
    { gene: '0011', name: 'uniform_4', img: '/images/uni-4.png' },
    { gene: '0100', name: 'uniform_5', img: '/images/uni-5.png' },
    { gene: '0101', name: 'uniform_6', img: '/images/uni-6.png' },
    { gene: '0110', name: 'uniform_7', img: '/images/uni-7.png' },
    { gene: '0111', name: 'uniform_8', img: '/images/uni-8.png' },
];

const weapon = [    
    { gene: '0000', name: 'weapon_1', img: '/images/weapon-1.png' },
    { gene: '0001', name: 'weapon_2', img: '/images/weapon-2.png' },
    { gene: '0010', name: 'weapon_3', img: '/images/weapon-3.png' },
    { gene: '0011', name: 'weapon_4', img: '/images/weapon-4.png' },
    { gene: '0100', name: 'weapon_5', img: '/images/weapon-5.png' },
    { gene: '0101', name: 'weapon_6', img: '/images/weapon-6.png' },
    { gene: '0110', name: 'weapon_7', img: '/images/weapon-7.png' },
    { gene: '0111', name: 'weapon_8', img: '/images/weapon-1.png' },
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const getRandomDNA = () => {
    let zeroPad = '0000000000000000000000000000000000000000';

    let dna = zeroPad + clan[getRandomInt(9)].gene;

    dna += base[getRandomInt(8)].gene;

    dna += eyes[getRandomInt(8)].gene;
    dna += hair[getRandomInt(8)].gene;
    dna += mouth[getRandomInt(8)].gene;
    dna += uniform[getRandomInt(8)].gene;
    dna += weapon[getRandomInt(8)].gene;

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

const getBase = (dna) => {
    let index = 44;
    let gene = dna.slice(index, index+4);
    console.log(gene);

    let selected = base.filter((one) => {
        return one.gene === gene;
    })

    return selected[0];
}

const getEyes = (dna) => {
    let index = 48;
    let gene = dna.slice(index, index+4);
    console.log(gene);

    let selected = eyes.filter((one) => {
        return one.gene === gene;
    })

    return selected[0];
}

const getMouth = (dna) => {
    let index = 56;
    let gene = dna.slice(index, index+4);
    console.log(gene);

    let selected = mouth.filter((one) => {
        return one.gene === gene;
    })

    return selected[0];
}

const getHair = (dna) => {
    let index = 52;
    let gene = dna.slice(index, index+4);
    console.log(gene);

    let selected = hair.filter((one) => {
        return one.gene === gene;
    })

    return selected[0];
}

const getUniform = (dna) => {
    let index = 56;
    let gene = dna.slice(index, index+4);
    console.log(gene);

    let selected = uniform.filter((one) => {
        return one.gene === gene;
    })

    return selected[0];
}

const getWeapon = (dna) => {
    let index = 60;
    let gene = dna.slice(index, index+4);
    console.log(gene);

    let selected = weapon.filter((one) => {
        return one.gene === gene;
    })

    return selected[0];
}




export { getRandomDNA, getClan, getBase, getEyes, getMouth, getHair, getUniform, getWeapon }