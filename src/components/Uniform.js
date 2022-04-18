import './Uniform.css';



const Uniform = (props) => {
    return (
        <div>
            { props.visible ? <p>Uniform</p> : '' }

        </div>
    );
}



export default Uniform;