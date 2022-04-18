import './Uniform.css';

import { getUniform } from '../geneHelpers';

const Uniform = (props) => {
    let myUniform = getUniform(props.dna);

    return (
        <div>
            { props.visible ? (<img src={myUniform.img} className='bodyParts' alt="gi" />) : '' }

        </div>
    );
}



export default Uniform;