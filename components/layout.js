import { Component, Children } from 'react'
import { Layout, Menu, Icon } from 'antd'
import CustomHeader from './header'
const { Header, Content, Footer, Slider } = Layout
class layout extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout className="page-layout-root" style={{ minHeight: '100vh' }}>
                <div className="page-root">
                    <CustomHeader />
                    {this.props.children}
                </div>
            </Layout>
        )
    }
}
export default layout