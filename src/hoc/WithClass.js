const WithClass = props => {
    return <ul className={props.classes}> {props.children} </ul>;
}
export default WithClass;