import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../../actions/fetchWeather';
import store from '../../store/appStore';

import './main.css';

class Main extends Component {
  componentDidMount() {
    const { handleFetchWeather } = this.props;
    handleFetchWeather('Toulouse');
  }

  render() {
    const data = store.getState();

    return (
      <div>
        {JSON.stringify(data)}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleFetchWeather: city => dispatch(fetchWeather(city)),
});

const mapStateToProps = state => state;

const MainView = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainView;
