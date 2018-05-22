import { Component } from 'react'
import { Menu, Affix, Row, Col } from 'antd'
import SearchBox from './search-box'
import './header.scss'
const SubMenu = Menu.SubMenu
class header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Row style={{lineHeight:'75px',height:75}}>
                <Col span={6}>
                    <div className="page-title">
                        <h1>SiliSili</h1>
                        {/* <span>animation</span> */}
                    </div>
                </Col>
                <Col span={12}>
                    <Menu
                        style={{
                            border: 'none',
                            background: 'transparent',
                            padding: '0 20px',
                            fontSize: '20px',
                            lineHeight: '75px'
                        }}
                        mode="horizontal" >
                        <Menu.Item>index</Menu.Item>
                        <SubMenu title="SubMenu">
                            <Menu.Item>SubMenuItem</Menu.Item>
                        </SubMenu>
                        <SubMenu title="SubMenu">
                            <Menu.Item>SubMenuItem</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Col>
                <Col span={6}>
                    <SearchBox />
                </Col>
            </Row>
        )
    }
}
export default header