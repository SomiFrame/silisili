import { Component, Fragment } from 'react'
import LoginForm from '../components/login-form'
import { Tabs, Row, Col } from 'antd'
import './login.scss'
const TabPane = Tabs.TabPane
class Login extends Component {
    constructor(props) {
        super(props)
    }
    callback() {
        console.log('tabs change')
    }
    render() {
        return (
            <Fragment>
                <div className="page-container">
                    <img className="background" src="/static/imgs/login-background.jpg" />
                    <div className="content-container">
                        <div className="login-title">
                            <h1>SiliSili</h1>
                            <span>animation</span>
                        </div>
                        <div className="login-section">
                            <Row>
                                <Col span="12">
                                    {/* <img className="section-background" src="/static/imgs/login-section-background.jpg"/> */}
                                </Col>
                                <Col span="12">
                                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                                        <TabPane tab="login in" key="1">
                                            <div className="login-field">
                                                <LoginForm />
                                            </div>
                                        </TabPane>
                                        <TabPane tab="sign up" key="2">
                                            sign up
                                        </TabPane>
                                    </Tabs>
                                </Col>
                            </Row>
                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Login
