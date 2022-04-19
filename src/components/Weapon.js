import './Weapon.css';

import { getWeapon } from '../geneHelpers';

const Weapon = (props) => {
    let myWeapon = getWeapon(props.dna);
    let face;
    if(!props.face) face='bodyParts';
    else face='bodyPartsRev'; 


    return (
        <div>
            { props.visible ? (<img src={myWeapon.img} className={face} alt="weapon" />) : '' }

        </div>
    );
}



export default Weapon;