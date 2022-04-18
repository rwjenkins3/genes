import './Eyes.css';



const Eyes = (props) => {
    return (
        <div>
            { props.visible ? <p>Eyes</p> : '' }

        </div>
    );
}



export default Eyes;