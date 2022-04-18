import { useState } from 'react';
import './PlayerView.css';

import Clan from './Clan';
import Subclass from './Subclass';
import Base from './Base';
import Eyes from './Eyes';
import Mouth from './Mouth';
import Hair from './Hair';
import Uniform from './Uniform';
import Weapon from './Weapon';

import { getRandomFighter } from '../geneHelpers';


const PlayerView = (props) => {
    const [ showClan, setShowClan ] = useState(true);
    const [ showSubclass, setShowSubclass ] = useState(true);
    const [ showBase, setShowBase ] = useState(true);
    const [ showEyes, setShowEyes ] = useState(true);
    const [ showMouth, setShowMouth ] = useState(true);
    const [ showHair, setShowHair ] = useState(true);
    const [ showUniform, setShowUniform ] = useState(true);
    const [ showWeapon, setShowWeapon ] = useState(true);

    let dna = getRandomFighter();
    console.log(dna);
    console.log(showClan);

    return (
        <div>
            { dna }
            <Clan dna={dna} visible={showClan} />
            <Subclass dna={props.genes} visible={showSubclass} />
            <Base dna={props.genes} visible={showBase} />
            <Eyes dna={props.genes} visible={showEyes} />
            <Mouth dna={props.genes} visible={showMouth} />
            <Hair dna={props.genes} visible={showHair} />
            <Uniform dna={props.genes} visible={showUniform} />
            <Weapon dna={props.genes} visible={showWeapon} />
        </div>
    );
}



export default PlayerView;