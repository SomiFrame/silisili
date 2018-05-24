import * as constants from "./constants"
import { createAction } from "redux-actions"
import mock from "../../mock"
import axios from "../../config/axios"
mock.start(axios)
console.log(constants.RECOMMEND_DATA_GET)
export const recommendDataGet = createAction(constants.RECOMMEND_DATA_GET,async id =>{
    const res = await axios.get('/randomString')
    return  res.data
})