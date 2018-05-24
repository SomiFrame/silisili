import React, { Component } from "react"
import { connect } from "react-redux"
import actions from "../redux/action"
import Layout from "../components/layout"
import Carousel from "../components/carousel"
import './index.scss'
class Page extends Component {
    static getInitialProps({ store, isServer, pathname, query }) {
        //store.dispatch({ type: 'FOO', payload: 'foo' }); // component will be able to read from store's state when rendered
        return { custom: 'custom' } // you can pass some custom props to component from here
    }
    onClick() {
        const { recommendDataGet } = actions
        console.log(recommendDataGet())
        this.props.dispatch(recommendDataGet())
        //this.props.dispatch({ type: "FOO", payload: 'lalala' })
    }
    render() {
        return (
            <Layout>
                <div>Prop from Redux {this.props.foo}</div>
                <div>Prop from getInitialProps {this.props.custom}</div>
                <button onClick={this.onClick.bind(this)}>update redux</button>
                {/* <label>{this.props.foo}</label>
                <img className="index-page-background" src="/static/imgs/page-background-luo.jpg" />
                <div onClick={this.onClick.bind(this)} className="page-container">
                    <div style={{ width: 900, height: 500, margin: '50px auto' }}>
                        <Carousel />
                    </div>
                </div> */}
            </Layout>
        )
    }
}

//export default connect()(Page);
function mapStateToProps(state) {
    console.log('all state', state)
    const { foo } = state
    return { foo }
}
export default connect(mapStateToProps)(Page);