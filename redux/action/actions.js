import * as constants from "./constants"
import { createAction } from "redux-actions"
import mock from "../../mock"
import axios from "../../config/axios"
mock.start(axios)
export const recommendDataGet = createAction(constants.RECOMMEND_DATA_GET,async id =>{
    const res = await axios.get('/recommend')
    return  res.data
})