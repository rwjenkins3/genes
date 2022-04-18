import { useState } from 'react';
import './PlayerView.css';

import Clan from './Clan';
import Base from './Base';
import Eyes from './Eyes';
import Mouth from './Mouth';
import Hair from './Hair';
import Uniform from './Uniform';
import Weapon from './Weapon';

import { getRandomDNA } from '../geneHelpers';


const PlayerView = (props) => {
    const [ showClan, setShowClan ] = useState(true);
    const [ showBase, setShowBase ] = useState(true);
    const [ showEyes, setShowEyes ] = useState(true);
    const [ showMouth, setShowMouth ] = useState(true);
    const [ showHair, setShowHair ] = useState(true);
    const [ showUniform, setShowUniform ] = useState(true);
    const [ showWeapon, setShowWeapon ] = useState(true);

    let p1_dna = getRandomDNA();
    let p1_r1 = getRandomDNA();
    let p1_r2 = getRandomDNA();

    let p2_dna = getRandomDNA();
    let p2_r1 = getRandomDNA();
    let p2_r2 = getRandomDNA();

    console.log(p1_dna);
    console.log(showClan);

    return (
        <div className='playerContainer'>
            <p>DNA: { p1_dna }</p>
            <p>R1: { p1_r1 }</p>
            <p>R2: { p1_r2 }</p>
            <div className='playerImage'  style={{backgroundImage: '/images/1879.jpg'}}>
            <Clan dna={p1_dna} visible={showClan} />
            <Base dna={p1_dna} visible={showBase} />
            <Eyes dna={p1_dna} visible={showEyes} />
            <Mouth dna={p1_dna} visible={showMouth} />
            <Hair dna={p1_dna} visible={showHair} />
            <Uniform dna={p1_dna} visible={showUniform} />
            <Weapon dna={p1_dna} visible={showWeapon} />
            <img src='/images/fists-3.png' className='bodyParts' alt="pon" />
            </div>
        </div>
    );
}



export default PlayerView;