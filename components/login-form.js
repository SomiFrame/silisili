import {Component} from 'react'
import {DatePicker} from 'antd'


class LoginForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <DatePicker />
            </div>
        )
    }
}
export default LoginForm