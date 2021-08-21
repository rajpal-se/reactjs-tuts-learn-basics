import React, { Component } from "react";

class ErrorBoundary extends Component{
    state = {
        error: false,
        errorMessage: "There is some Error exists."
    }

    componentDidCatch(error, info){
        this.setState({
            error: true,
            errorMessage: error
        });
    }
    render(){
        return (
            this.state.error ? this.state.errorMessage : this.props.children
        );
    }
}

export default ErrorBoundary;