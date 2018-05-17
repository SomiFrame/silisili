import {Component,Fragment } from 'react'
import LoginForm from '../components/login-form'

class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                <div className="login-section">
                    <LoginForm />
                </div>
            </Fragment>
        )
    }
}
export default Login
