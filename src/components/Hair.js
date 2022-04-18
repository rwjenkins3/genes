import './Hair.css';



const Hair = (props) => {
    return (
        <div>
            { props.visible ? <p>Hair</p> : '' }

        </div>
    );
}



export default Hair;