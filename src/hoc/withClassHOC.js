const withClassHOC = (WrapComponent, classes) => {
    return props => {
        return <ul className={classes}> <WrapComponent {...props} /> </ul>;
    }
}
export default withClassHOC;