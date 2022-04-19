import './Uniform.css';

import { getUniform } from '../geneHelpers';

const Uniform = (props) => {
    let myUniform = getUniform(props.dna);
    let face;
    if(!props.face) face='bodyParts';
    else face='bodyPartsRev'; 


    return (
        <div>
            { props.visible ? (<img src={myUniform.img} className={face} alt="gi" />) : '' }

        </div>
    );
}



export default Uniform;