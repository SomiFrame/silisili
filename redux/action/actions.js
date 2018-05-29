import * as constants from "./constants"
import { createAction } from "redux-actions"
import fetchApi from "../fetchApis"
export const recommendDataGet = createAction(constants.RECOMMEND_DATA_GET, fetchApi.fetchRecommend)
export const updateFoo= createAction('UPDATE_FOO', null)