import './Base.css';

import { getBase } from '../geneHelpers';


const Base = (props) => {
    let myBase = getBase(props.dna);
    let face;
    if(!props.face) face='bodyParts';
    else face='bodyPartsRev'; 

    return (
        <div>
            { props.visible ? (<img src={myBase.img} className={face} alt="bod" />) : '' }
        </div>
    );
}



export default Base;