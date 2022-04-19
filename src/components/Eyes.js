import './Eyes.css';

import { getEyes } from '../geneHelpers';


const Eyes = (props) => {
    let myEyes = getEyes(props.dna);
    //let eyeName = myEyes.name;
    let face;
    if(!props.face) face='bodyParts';
    else face='bodyPartsRev'; 


    return (
        <div>
            { props.visible ? (<img src={myEyes.img} className={face} alt="eyes" />) : '' }

        </div>
    );
}



export default Eyes;