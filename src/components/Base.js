import './Base.css';



const Base = (props) => {
    return (
        <div>
            { props.visible ? <p>Base</p> : '' }
        </div>
    );
}



export default Base;