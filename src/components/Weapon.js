import './Weapon.css';



const Weapon = (props) => {
    return (
        <div>
            { props.visible ? <p>Weapon</p> : '' }

        </div>
    );
}



export default Weapon;