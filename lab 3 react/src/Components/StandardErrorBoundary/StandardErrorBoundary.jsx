import { Component } from "react";
import ErrorPage from "../ErrorPage/ErrorPage";

class StandardErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { 
            hasError: false,
            error: null
        } 
    }
    static getDerivedStateFromError(error) {
        this.state = { 
            hasError: true,
            error: error
        }
    }
    componentDidCatch(error, errorInf) {
        console.log(error, errorInf);
    }
    render() { 
        return (
            <>{this.state.hasError ? <ErrorPage/> : this.props.children}</>

        );
    }
}
 
export default StandardErrorBoundary;