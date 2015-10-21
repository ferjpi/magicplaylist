'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {newSearch} from '../actions/SearchActions';
import PlaylistActions from '../actions/PlaylistActions';

class SearchBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialValue: this.props.value
    }
  }

  _handleSearch() {
    const text = ReactDOM.findDOMNode(this.refs.searchInput).value;
    if (text.length > 3) {
      newSearch(text);
      PlaylistActions.search(text, this.props.country);
    }
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this._handleSearch();
    }
  }

  render() {
    return  <div className='search-box'>
              <div className='search-group'>
                  <span className='input-group-btn'>
                      <div className='btn-search' onClick={this._handleSearch.bind(this)}>
                        <img src='img/search.svg'/>
                      </div>
                  </span>
                  <input
                    type='text'
                    ref='searchInput'
                    className='input-search'
                    placeholder='What is your favorite song?'
                    onKeyPress={this._handleKeyPress.bind(this)}
                    defaultValue={this.state.initialValue}/>
              </div>
            </div>
  }
}

export default SearchBox;
