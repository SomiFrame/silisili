import React, { Component } from "react"
import { createStore, applyMiddleware } from "redux"
import promiseMiddleware from "redux-promise"
const initialState = {
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
const makeStore = (initialState) => {
    return createStore(reducer, appleMiddleware(promiseMiddleware), initialState)
}
export default makeStore