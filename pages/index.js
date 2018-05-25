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
    componentDidMount() {
        const { recommendDataGet } = actions
        this.props.dispatch(recommendDataGet())
    }
    render() {
        return (
            <Layout>
                <img className="index-page-background" src="/static/imgs/page-background-luo.jpg" />
                <div className="page-container">
                    <div style={{ width: 900, height: 500, margin: '50px auto' }}>
                        <Carousel dataList={this.props.recommends} />
                    </div>
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