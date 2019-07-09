// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchWeather } from '../../actions/fetchWeather';
import store from '../../store/appStore';

import './main.css';

import type { Element } from 'react';

type State = {
  getState: () => void,
}

type Props = {
  handleFetchWeather: (city: string) => void,
}

class Main extends Component<Props, State> {
  componentDidMount(): void {
    const { handleFetchWeather } = this.props;
    handleFetchWeather('Toulouse');
  }

  render(): Element<'div'> {
    const data: State = store.getState();

    return (
      <div>
        <Link to="/home">
          Home
        </Link>
        <br />
        <Link to="/404">
        404
        </Link>
        <br />
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
