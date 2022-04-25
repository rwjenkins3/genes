import './Clan.css';

import { getClan } from '../geneHelpers';

const Clan = (props) => {
    let myClan = getClan(props.dna);
    let myName = myClan.name;

    return (
        <div className='clanName'>
            { props.visible ? (<p>{myName}</p>) : '' }

        </div>
    );
}



export default Clan;