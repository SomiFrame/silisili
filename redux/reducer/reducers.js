import { handleActions } from "redux-actions"
import actions from "../action"
const reducers = handleActions({
    [actions.recommendDataGet](state,action) {
        console.log('reducer trigger',state,action)
        console.log(action)
        return {foo:action.payload.randomString}
    }
},{foo: ''})
export default reducers