import { Component } from 'react'
import { Input } from 'antd'
import "./search-box.scss"
const Search = Input.Search
class SearchBox extends Component {
    onSearch(val) {
        console.log('val', val)
    }
    render() {
        return (
            <Search className="search-box"
                size="large"
                placeholder="input search text"
                onSearch={this.onSearch}
                style={{ width: "80%"}}
            />
        )
    }
}
export default SearchBox