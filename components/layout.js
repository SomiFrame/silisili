import { Component, Children } from 'react'
import { Layout, Menu, Icon } from 'antd'
import CustomHeader from './header'
import "./layout.scss"
const { Header, Content, Footer, Slider } = Layout
class layout extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout className="page-layout-root" style={{ minHeight: '100vh' }}>
                <CustomHeader />
                <div className="page-container">
                    {this.props.children}
                </div>
            </Layout>
        )
    }
}
export default layout