import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import PopUp from "./components/PopUp/PopUp";
import PopUp2 from "./components/PopUp2/PopUp2";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            firstPopupOpened: false,
            secondPopupOpened: false
        };
    }

    updateData = (value, value2) =>{
        this.setState({ firstName: value, lastName: value2 })
    };

    popUpHandler1 = () =>{
        this.setState({firstPopupOpened : !this.state.firstPopupOpened});
    };

    popUpHandler2 = () =>{
        this.setState({secondPopupOpened : !this.state.secondPopupOpened});
    };

    render() {
        return (
            <div className="app row">
                { this.state.firstPopupOpened &&
                <PopUp updateData={this.updateData}/>
                }
                { this.state.secondPopupOpened &&
                <PopUp2 dataName={this.state.firstName} dataLastName={this.state.lastName} onChange={value => this.setState({value})}/>
                }
                <div className="buttons">
                    <button onClick={() => this.popUpHandler1()} className="waves-effect waves-light btn-large grey darken-1">Show 1 PopUp</button>
                    <button onClick={() => this.popUpHandler2()} className="waves-effect waves-light btn-large grey darken-1">Result</button>
                </div>

                <h1 className="best-wishes">Thanks TATL Technology for this!</h1>
            </div>
        );
    }
}

export default App;
