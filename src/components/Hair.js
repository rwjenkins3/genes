import './Hair.css';

import { getHair } from '../geneHelpers';


const Hair = (props) => {
    let myHair = getHair(props.dna);
    let face;
    if(!props.face) face='bodyParts';
    else face='bodyPartsRev'; 


    return (
        <div>
            { props.visible ? (<img src={myHair.img} className={face} alt="hair" />) : '' }

        </div>
    );
}



export default Hair;