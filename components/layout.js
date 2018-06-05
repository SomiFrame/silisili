import { Component, Children, createRef } from 'react'
import { Layout, Menu, Icon, Affix } from 'antd'
import CustomHeader from './header'
import "./layout.scss"
const { Header, Content, Footer, Slider } = Layout
class layout extends Component {
    constructor(props) {
        super(props)
        this.refContainer = createRef()
    }
    componentDidMount() {
        console.log('ref', this.refContainer)
    }
    render() {
        return (
            <div>
                <div className="header-container">
                    <div className="header-bg"></div>
                    <CustomHeader />
                </div>
                <div ref={this.refContainer} className="page-layout-root" style={{ minHeight: '100vh' }}>
                    {this.props.children}
                    <div style={{ width: "100%", height: "200px", background: "#000" }}>footer</div>
                </div>
            </div>
        )
    }
}
export default layout