import React, { Component } from "react"
import { createStore, applyMiddleware } from "redux"
import promiseMiddleware from "redux-promise"
import * as actions from "./action"
import reducers from './reducer/reducers';
const exampleInitialState = {
    foo: 'all',
    too: 'asoidfu'
}
// create a simple reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOO':
            return { ...state, foo: action.payload }
        default:
            return state
    }
};
// create a store creator
const makeStore = (initialState = exampleInitialState) => {
    return createStore(reducers, initialState, applyMiddleware(promiseMiddleware))
}
export default makeStore