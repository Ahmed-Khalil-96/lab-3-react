import { Component } from "react";


class ErrorPage extends Component {
    
    state = {  } 
    render() { 
        this.props.funcNav(false);
        return (
            <div>
                <h1 className="alert alert-danger">An error have occoured</h1>
            </div>
        );
    }
}
 
export default ErrorPage;