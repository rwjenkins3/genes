import './Subclass.css';



const Subclass = (props) => {
    return (
        <div>
            { props.visible ? <p>Class</p> : '' }

        </div>
    );
}



export default Subclass;