import React from 'react';
import classes from './PopUp.module.scss';
import classNames from 'classnames';

class PopUp extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            firstName: '',
            lastName: '',
            data: {},
            isFetching: true,
            error: null
        }
    }

    // Обработка ошибок и отправка запроса с помощбю Fetch

    requestFetch = () => {
        fetch(`http://localhost:3000/?firstName=${this.state.firstName}&lastName=${this.state.lastName}`)
            .then((response) =>{
                if (response.status >= 400 && response.status < 600) {
                    alert("Bad response from server");
                }
                else if (response.status !== 200) {
                    return Promise.reject(new Error(response.statusText))
                }
                return response
            })
            .then((response) => {
                return response.json()
            })
            .then(function (data) {
                console.log('data', data)
            })
            .catch(function (error) {
                console.log('error', error)
            })
    };

    onInputChangeFirst = (e) =>{
        this.setState({firstName: e.target.value}); // Получение данных с input
    };

    onInputChangeLast = (e) =>{
        this.setState({lastName: e.target.value});  // Получение данных с input
    };

    submitForm = (e) =>{
        e.preventDefault();  // Остановка отправки формы
    };



    render() {
        return(
            <div className={classNames(classes.popUp, "row")}>
                <form onSubmit={this.submitForm}>
                    <div className="input-field col s6">
                        <input type="text" value={this.state.firstName} placeholder="First Name" onChange={this.onInputChangeFirst} className="validate"/>
                    </div>
                    <div className="input-field col s6">
                        <input type="text" value={this.state.lastName} placeholder="Last Name" onChange={this.onInputChangeLast} className="validate"/>
                    </div>
                    <button onClick={() => { this.props.updateData(this.state.firstName, this.state.lastName)}} className={classes.inSubmit} type="submit">Click to change the state *</button>
                    {/*Кнопка изменения стейта*/}
                    <button onClick={this.requestFetch} className={classes.inSubmit}>Send request</button>
                    {/*Кнопка для отправки данных формы через Fetch*/}
                </form>
                <p className={classes.description}>*After that, click on Result to view</p>
            </div>
        )
    }
}

export default PopUp;