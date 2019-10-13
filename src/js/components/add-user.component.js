import React from "react";

// User registration for react-route-dom
class UserRegistration extends React.Component {
    constructor(props) {
        super(props);
            this.onChangeUserDescription = this.onChangeUserDescription.bind(this);
            this.onChangeUserSurname     = this.onChangeUserSurname.bind(this);
            this.onChangeUserPhone       = this.onChangeUserPhone.bind(this);
            this.onChangeUseremail       = this.onChangeUseremail.bind(this);
            this.onSubmit                = this.onSubmit.bind(this)
                this.state = {
                    user_name: '',
                    user_surname: '',
                    user_phone: '',
                    user_email: '',
                }
    }

// Change obj this.state
onChangeUserDescription(e) {
    this.setState({
        user_name: e.target.value
    });
}
onChangeUserSurname(e) {
    this.setState({
        user_surname: e.target.value
    });
}
onChangeUserPhone(e) {
    this.setState({
        user_phone: e.target.value
    });
}
onChangeUseremail(e) {
    this.setState({
        user_email: e.target.value
    });
}

    // To JSON + prevent
onSubmit(e) {
    e.preventDefault();
    let userRegistrInfo = JSON.stringify(this.state);
    localStorage.userRegistrInfo = userRegistrInfo;
    this.setState({
        user_name: '',
        user_surname: '',
        user_phone: '',
        user_email: ''
    })
}

render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Create new user</h3>
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <label>name: </label>
                    <input type='text'
                        className='form-control'
                        value={this.state.user_name}
                        onChange={this.onChangeUserDescription}></input>
                </div>
                <div className='form-group'>
                    <label>surname: </label>
                    <input type='text'
                        className='form-control'
                        value={this.state.user_surname}
                        onChange={this.onChangeUserSurname}></input>
                </div>
                <div className='form-group'>
                    <label>phone: </label>
                    <input type='text'
                        className='form-control'
                        value={this.state.user_phone}
                        onChange={this.onChangeUserPhone}></input>
                </div>
                <div className='form-group'>
                    <label>email:</label>
                    <input type='email'
                        className='form-control'
                        value={this.state.user_email}
                        onChange={this.onChangeUseremail}></input>
                </div>
                <div className='registr-side'>
                    <input type='submit'
                        className='btn btn-primary'
                        value='Registration'></input>
                </div>
            </form>
        </div>
    )
};
};
export default UserRegistration