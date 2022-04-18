import './Eyes.css';

import { getEyes } from '../geneHelpers';


const Eyes = (props) => {
    let myEyes = getEyes(props.dna);
    //let eyeName = myEyes.name;

    return (
        <div>
            { props.visible ? (<img src={myEyes.img} className='bodyParts' alt="eyes" />) : '' }

        </div>
    );
}



export default Eyes;