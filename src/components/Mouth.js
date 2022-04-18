import './Mouth.css';



const Mouth = (props) => {
    return (
        <div>
            { props.visible ? <p>Mouth</p> : '' }

        </div>
    );
}



export default Mouth;