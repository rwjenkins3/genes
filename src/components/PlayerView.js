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

    // console.log(p1_dna);
    // console.log(showClan);
    let face = false;
    if(props.reverse) face=true;

    return (
        <div className='playerContainer'>
            <p>DNA: { props.dna }</p>
            <p>R1: { props.r1 }</p>
            <p>R2: { props.r2 }</p>
            <div className='playerImage'>
                <Clan dna={props.dna} visible={showClan} face={face} />
                <Base dna={props.dna} visible={showBase} face={face} />
                <Eyes dna={props.dna} visible={showEyes} face={face} />
                <Mouth dna={props.dna} visible={showMouth} face={face} />
                <Hair dna={props.dna} visible={showHair} face={face} />
                <Uniform dna={props.dna} visible={showUniform} face={face} />
                <Weapon dna={props.dna} visible={showWeapon} face={face} />
                { !face ? <img src='/images/fists-3.png' className='bodyParts' alt="pon" /> : <img src='/images/fists-3.png' className='bodyPartsRev' alt="pon" /> }
            </div>
        </div>
    );
}



export default PlayerView;