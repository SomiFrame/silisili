import React, { Component } from "react"
import { connect } from "react-redux"
import actions from "../redux/action"
import Layout from "../components/layout"
import Carousel from "../components/carousel"
import dynamic from "next/dynamic"
import "aos/src/sass/aos.scss"
import "./index.scss"
let aos
if (typeof window !== "undefined") { aos = require("aos") }
class Page extends Component {
    static getInitialProps({ req, store, isServer, pathname, query }) {
        const { recommendDataGet } = actions
        store.dispatch(recommendDataGet())
        return {
            isBrowser: !!!req
        }
    }
    componentDidMount() {
        console.log(this.props)
        if (this.props.isBrowser) {
            aos.init({
                duration: 1000,
                easing: 'eas-in-sine',
                delay: 100
            })
            const { recommendDataGet } = actions
            this.props.dispatch(recommendDataGet())
        }
    }
    render() {
        return (
            <Layout>
                <img className="index-page-background" src="/static/imgs/page-background-luo.jpg" />
                <div className="page-container">
                    <section id="section-1" data-aos="fade-zoom-in">
                        <div style={{ width: 900, height: 500, margin: '100px auto' }}>
                            <Carousel dataList={this.props.recommends} />
                        </div>
                    </section>
                    <section id="section-2" data-aos="zoom-in-up">
                        <div style={{ width: 900, height: 500, margin: '100px auto' }}>
                            <Carousel dataList={this.props.recommends} />
                        </div>
                    </section>
                    <section id="section-3" data-aos="flip-up">
                        <div style={{ width: 900, height: 500, margin: '100px auto' }}>
                            <Carousel dataList={this.props.recommends} />
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

//export default connect()(Page);
function mapStateToProps(state) {
    console.log('all state', state)
    const { foo, recommends } = state
    return { foo, recommends }
}

export default connect(mapStateToProps)(Page);