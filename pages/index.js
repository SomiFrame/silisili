import React, { Component } from "react"
import { connect } from "react-redux"
import actions from "../redux/action"
import fetchApi from "../redux/fetchApis"
import Layout from "../components/layout"
import Carousel from "../components/carousel"
import dynamic from "next/dynamic"
import "aos/src/sass/aos.scss"
import "./index.scss"
import { updateFoo } from "../redux/action/actions";
let aos
if (typeof window !== "undefined") { aos = require("aos") }
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
        return (
            <Layout>
                <img className="index-page-background" src="/static/imgs/page-background-luo.jpg" />
                <section id="section-1">
                    <div style={{ width: 900, height: 500, margin: '100px auto' }}>
                        <Carousel dataList={this.props.recommends} />
                    </div>
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