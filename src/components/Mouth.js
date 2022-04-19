import './Mouth.css';

import { getMouth } from '../geneHelpers';


const Mouth = (props) => {
    let myMouth = getMouth(props.dna);
    let face;
    if(!props.face) face='bodyParts';
    else face='bodyPartsRev'; 


    return (
        <div>
            { props.visible ? (<img src={myMouth.img} className={face} alt="mouth" />) : '' }

        </div>
    );
}



export default Mouth;