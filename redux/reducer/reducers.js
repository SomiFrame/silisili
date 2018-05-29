import { handleActions } from "redux-actions"
import actions from "../action"
const reducers = handleActions({
    [actions.recommendDataGet](state, action) {
        const { data, error } = action.payload
        return { ...state, foo: 'fetch', recommends: data }
    },
    [actions.updateFoo](state, action) {
        return { ...state, foo: 'lalalala' }
    }
}, { foo: '', recommends: [] })

export default reducers