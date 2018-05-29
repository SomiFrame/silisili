import mock from "../mock"
import axios from "../config/axios"
mock.start(axios)
const fetchRecommend = async () => {
    let res = await axios.get('/recommend')
    return res.data
}
export default {
    fetchRecommend
}