import './Clan.css';

import { getClan } from '../geneHelpers';

const Clan = (props) => {
    let myClan = getClan(props.dna);
    let myName = myClan.name;

    console.log(myClan);

    return (
        <div>
            { props.visible ? (<p>{myName}</p>) : '' }

        </div>
    );
}



export default Clan;