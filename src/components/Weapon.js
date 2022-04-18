import './Weapon.css';

import { getWeapon } from '../geneHelpers';

const Weapon = (props) => {
    let myWeapon = getWeapon(props.dna);
    return (
        <div>
            { props.visible ? (<img src={myWeapon.img} className='bodyParts' alt="weapon" />) : '' }

        </div>
    );
}



export default Weapon;