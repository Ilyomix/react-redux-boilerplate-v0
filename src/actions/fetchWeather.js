import {
  FETCH_WEATHER,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_ERROR,
} from '../constants/actions/actions-types';

export function fetchWeather(town) {
  const key = '75ddbb198c4617d203e306c2442d350c';
  const reqUrl = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${key}&units=metric`;
  const headers = new Headers();

  const reqSettings = {
    method: 'GET',
    headers,
    mode: 'cors',
    cache: 'default',
  };

  return (dispatch) => {
    dispatch({ type: FETCH_WEATHER, payload: {} });
    fetch(reqUrl, reqSettings)
      .then(
        res => res.json(),
      )
      .then(
        data => dispatch({ type: FETCH_WEATHER_SUCCESS, payload: data }),
      )
      .catch(
        err => dispatch({ type: FETCH_WEATHER_ERROR, payload: err }),
      );
  };
}

export default fetchWeather;
