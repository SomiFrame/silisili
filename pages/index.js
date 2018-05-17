import React, { Component } from "react";
import { connect } from "react-redux";
import withRedux from "next-redux-wrapper"

class Page extends Component {
    static getInitialProps({ store, isServer, pathname, query }) {
        store.dispatch({ type: 'FOO', payload: 'foo' }); // component will be able to read from store's state when rendered
        return { custom: 'custom' }; // you can pass some custom props to component from here
    }
    onClick() {
        this.props.dispatch({ type: "FOO", payload: 'lalala' })
    }
    render() {
        return (
            <div>
                <div>Prop from Redux {this.props.foo}</div>
                <div>Prop from getInitialProps {this.props.custom}</div>
                <button onClick={this.onClick.bind(this)}>update redux</button>
            </div>
        )
    }
}

//export default connect()(Page);
function mapStateToProps(state) {
    console.log('all state',state)
    const {foo} = state
    return {foo}
}
export default connect(mapStateToProps)(Page);