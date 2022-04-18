import './Base.css';

import { getBase } from '../geneHelpers';


const Base = (props) => {
    let myBase = getBase(props.dna);

    return (
        <div>
            { props.visible ? (<img src={myBase.img} className='bodyParts' alt="bod" />) : '' }
        </div>
    );
}



export default Base;