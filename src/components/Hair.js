import './Hair.css';

import { getHair } from '../geneHelpers';


const Hair = (props) => {
    let myHair = getHair(props.dna);

    return (
        <div>
            { props.visible ? (<img src={myHair.img} className='bodyParts' alt="hair" />) : '' }

        </div>
    );
}



export default Hair;