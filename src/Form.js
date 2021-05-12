
import React from "react";

export default class From extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
        });
    };

    render() {
        return (
            <form>
                <h3>Create Account</h3>
                <input className="form-control"
                    name="firstName"
                    placeholder="First name"
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                />

                <br />

                <input className="form-control"
                    name="lastName"
                    placeholder="Last name"
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                />

                <br />

                <input className="form-control"
                    name="username"
                    placeholder="User name"
                    value={this.state.username}
                    onChange={e => this.change(e)}
                />

                <br />

                <input className="form-control"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                />

                <br />

                <input className="form-control"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={e => this.change(e)}
                />

                <br />
               
               <button class="btn btn-primary" onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        )
    }
}