import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  state = {
    term: ''
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    let { term } = this.state;
    this.props.fetchWeather(term);

    term = '';
    this.setState({ term });
  };

  render() {
    const { term } = this.state;
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          type="text"
          value={term}
          className="form-control"
          placeholder="Get a five-day forecast of your favorite cities"
          name="term"
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
