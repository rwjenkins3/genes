const clan = [
    { gene: '0000', name: 'Shoshin', img: '', stats: [39, 39, 35, 27] },
    { gene: '0001', name: 'Shaolin', img: '', stats: [31, 35, 31, 43] },
    { gene: '0010', name: 'Shinobi', img: '', stats: [27, 43, 35, 35] },
    { gene: '0011', name: 'White Crane', img: '', stats: [35, 31, 35, 39] },
    { gene: '0100', name: 'Tengu', img: '', stats: [35, 35, 39, 31] },
    { gene: '0101', name: 'Ronin', img: '', stats: [43, 39, 27, 31] },
    { gene: '0110', name: 'Monk', img: '', stats: [31, 39, 43, 27] },
    { gene: '0111', name: 'Shuri', img: '', stats: [61, 31, 31, 41] },
    { gene: '1000', name: 'Naha', img: '', stats: [39, 35, 31, 35] },
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
    { gene: '0000', name: 'uniform_1', img: '/images/uni-1.png', stats: [0, 0, 0, 0] },
    { gene: '0001', name: 'uniform_2', img: '/images/uni-2.png', stats: [1, 0, 0, 0] },
    { gene: '0010', name: 'uniform_3', img: '/images/uni-3.png', stats: [1, 1, 1, 0] },
    { gene: '0011', name: 'uniform_4', img: '/images/uni-4.png', stats: [1, 1, 1, 1] },
    { gene: '0100', name: 'uniform_5', img: '/images/uni-5.png', stats: [0, 0, 1, 1] },
    { gene: '0101', name: 'uniform_6', img: '/images/uni-6.png', stats: [0, 1, 1, 0] },
    { gene: '0110', name: 'uniform_7', img: '/images/uni-7.png', stats: [1, 0, 1, 0] },
    { gene: '0111', name: 'uniform_8', img: '/images/uni-8.png', stats: [1, 1, 0, 0] },
];

const weapon = [    
    { gene: '0000', name: 'weapon_1', img: '/images/weapon-1.png', stats: [1, 0, 2, 0] },
    { gene: '0001', name: 'weapon_2', img: '/images/weapon-2.png', stats: [0, 2, 1, 1] },
    { gene: '0010', name: 'weapon_3', img: '/images/weapon-3.png', stats: [0, 0, 3, 0] },
    { gene: '0011', name: 'weapon_4', img: '/images/weapon-4.png', stats: [2, 2, 0, 0] },
    { gene: '0100', name: 'weapon_5', img: '/images/weapon-5.png', stats: [1, 1, 1, 0] },
    { gene: '0101', name: 'weapon_6', img: '/images/weapon-6.png', stats: [0, 1, 1, 2] },
    { gene: '0110', name: 'weapon_7', img: '/images/weapon-7.png', stats: [3, 0, 0, 1] },
    { gene: '0111', name: 'weapon_8', img: '/images/weapon-1.png', stats: [0, 2, 2, 0] },
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const getRandomDNA = () => {
    let zeroPad = '0000000000000000000000000000000000000000';
    let c, b, e, h, m, u, w = 0;

    let stats = [];

    c = getRandomInt(9);
    b = getRandomInt(8);
    e = getRandomInt(8);
    h = getRandomInt(8);
    m = getRandomInt(8);
    u = getRandomInt(8);
    w = getRandomInt(8);

    let dna = zeroPad + clan[c].gene; // 40
    stats[0] = clan[c].stats[0];
    stats[1] = clan[c].stats[1];
    stats[2] = clan[c].stats[2];
    stats[3] = clan[c].stats[3];

    dna += base[b].gene; // 44

    dna += eyes[e].gene; // 48
    dna += hair[h].gene; // 52
    dna += mouth[m].gene; // 56
    dna += uniform[u].gene; // 60
    stats[0] += uniform[u].stats[0];
    stats[1] += uniform[u].stats[1];
    stats[2] += uniform[u].stats[2];
    stats[3] += uniform[u].stats[3];

    dna += weapon[w].gene; // 64
    stats[0] += weapon[w].stats[0];
    stats[1] += weapon[w].stats[1];
    stats[2] += weapon[w].stats[2];
    stats[3] += weapon[w].stats[3];

    return [dna, stats];

}

const newFOL = (d1, d2) => {
    let zeroPad = '0000000000000000000000000000000000000000';
    let dna = zeroPad;

    let flip = getRandomInt(2);
    if(flip > 0) dna += getClan(d1).gene;
        else dna += getClan(d2).gene;

    flip = getRandomInt(2);
    if(flip > 0) dna += getBase(d1).gene;
        else dna += getBase(d2).gene;
        console.log(flip);

    flip = getRandomInt(2);
    if(flip > 0) dna += getEyes(d1).gene;
    else dna += getEyes(d2).gene;
    
    flip = getRandomInt(2);
    if(flip > 0) dna += getHair(d1).gene;
        else dna += getHair(d2).gene;
    
    flip = getRandomInt(2);
    if(flip > 0) dna += getMouth(d1).gene;
        else dna += getMouth(d2).gene;
    
    flip = getRandomInt(2);
    if(flip > 0) dna += getUniform(d1).gene;
        else dna += getUniform(d2).gene;

    flip = getRandomInt(2);
    if(flip > 0) dna += getWeapon(d1).gene;
        else dna += getWeapon(d2).gene;
        
            
    
    return dna;

}

const getClan = (dna) => {
    let index = 40;
    let gene = dna.slice(index, index+4);

    let selected = clan.filter((one) => {
        return one.gene === gene;
    })

    return selected[0];
}

const getBase = (dna) => {
    let index = 44;
    let gene = dna.slice(index, index+4);

    let selected = base.filter((one) => {
        return one.gene === gene;
    })

    return selected[0];
}

const getEyes = (dna) => {
    let index = 48;
    let gene = dna.slice(index, index+4);

    let selected = eyes.filter((one) => {
        return one.gene === gene;
    })

    return selected[0];
}

const getMouth = (dna) => {
    let index = 56;
    let gene = dna.slice(index, index+4);

    let selected = mouth.filter((one) => {
        return one.gene === gene;
    })

    return selected[0];
}

const getHair = (dna) => {
    let index = 52;
    let gene = dna.slice(index, index+4);

    let selected = hair.filter((one) => {
        return one.gene === gene;
    })

    return selected[0];
}

const getUniform = (dna) => {
    let index = 60;
    let gene = dna.slice(index, index+4);

    let selected = uniform.filter((one) => {
        return one.gene === gene;
    })

    return selected[0];
}

const getWeapon = (dna) => {
    let index = 64;
    let gene = dna.slice(index, index+4);

    let selected = weapon.filter((one) => {
        return one.gene === gene;
    })

    console.log(gene);

    return selected[0];
}




export { getRandomDNA, getClan, getBase, getEyes, getMouth, getHair, getUniform, getWeapon, newFOL }