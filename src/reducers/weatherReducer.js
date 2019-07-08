import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from '../constants/actions/actions-types';

function weatherReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log('FETCH_WEATHER');
      return ({
        ...state,
        data: action.payload,
        loading: true,
      });

    case FETCH_WEATHER_SUCCESS:
      console.log('FETCH_WEATHER_SUCCESS');
      return ({
        ...state,
        data: action.payload,
        loading: false,
      });

    case FETCH_WEATHER_ERROR:
      console.log('FETCH_WEATHER_ERROR');
      return ({
        ...state,
        err: action.payload,
        loading: true,
      });

    default:
      return state;
  }
}

export default weatherReducer;
