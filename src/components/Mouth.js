import './Mouth.css';

import { getMouth } from '../geneHelpers';


const Mouth = (props) => {
    let myMouth = getMouth(props.dna);

    return (
        <div>
            { props.visible ? (<img src={myMouth.img} className='bodyParts' alt="mouth" />) : '' }

        </div>
    );
}



export default Mouth;