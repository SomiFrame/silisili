import { handleActions } from "redux-actions"
import actions from "../action"
const reducers = handleActions({
    [actions.recommendDataGet](state, action) {
        console.log('reducer trigger', state, action)
        const { data, error } = action.payload
        return { foo: 'fetch', recommends: data }
    }
}, { foo: '', recommends: [] })
export default reducers