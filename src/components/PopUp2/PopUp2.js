import React from 'react';
import classes from './PopUp2.module.scss';
import classNames from 'classnames';


class PopUp2 extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            firstName: '',
            lastName: ''
        }
    }
    render() {
        return(
            <div className={classNames(classes.popUp, "row")}>
                <h3>{`First Name: ${this.props.dataName}`}</h3>
                <h3>{`Last Name: ${this.props.dataLastName}`}</h3>
            </div>
        )
    }


}

export default PopUp2;