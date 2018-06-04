import React, { Component } from "react"
import { connect } from "react-redux"
import actions from "../redux/action"
import fetchApi from "../redux/fetchApis"
import Layout from "../components/layout"
import Carousel from "../components/carousel"
import dynamic from "next/dynamic"
import { Row, Col, Card } from "antd"
import "aos/src/sass/aos.scss"
import "./index.scss"
import { updateFoo } from "../redux/action/actions";
let aos
if (typeof window !== "undefined") { aos = require("aos") }
const { Grid, Meta } = Card
class Page extends Component {
    static async getInitialProps({ req, store, isServer, pathname, query }) {
        const { recommendDataGet, updateFoo } = actions
        if (!req) {
            return {
                isBrowser: !!!req
            }
        } else {
            await store.dispatch(recommendDataGet())
            return {
                isBrowser: !!!req
            }
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            ...this.props
        }
    }
    componentDidMount() {
        aos.init({
            duration: 1000,
            easing: 'eas-in-sine',
            delay: 100
        })
        if (this.props.isBrowser) {
            const { recommendDataGet } = actions
            this.props.dispatch(recommendDataGet())
        }
    }
    render() {
        const GridStyle = {
            width: "20%",
            textAlign: "center",
            border: "none"
        }
        return (
            <Layout>
                <img className="index-page-background" src="/static/imgs/page-background-luo.jpg" />
                <section id="section-1">
                    <div style={{ width: 700, height: 400, margin: '40px auto' }}>
                        <Carousel dataList={this.props.recommends} />
                    </div>
                </section>
                <section id="section-dayly-update">
                    <Card title={"今日更新"} bordered={false}>
                        <Row gutter={16}>
                            {
                                [1, 2, 3, 4, 5, 6].map(() =>
                                    <Col md={8} sm={12} xs={24} lg={4}>
                                        <Card
                                            hoverable
                                            style={{ width: "100%" }}
                                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
                                            <Meta
                                                title="Europe Street beat"
                                                description="www.instagram.com"
                                            />
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>
                    </Card>
                </section>
            </Layout>
        )

    }
}

//export default connect()(Page);
function mapStateToProps(state) {
    const { foo, recommends } = state
    return { foo, recommends }
}

export default connect(mapStateToProps)(Page)