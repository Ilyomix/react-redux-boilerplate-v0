// @flow

import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from '../constants/actions/actions-types';
import { Action } from '../types/redux-types'

type State = {|
  data?: {||},
  err?: {||},
  loading?: boolean,
|};

function weatherReducer(state: State = {}, action: Action): State {
  switch (action.type) {
    case FETCH_WEATHER:
      return ({
        ...state,
        data: action.payload,
        loading: true,
      });

    case FETCH_WEATHER_SUCCESS:
      return ({
        ...state,
        data: action.payload,
        loading: false,
      });

    case FETCH_WEATHER_ERROR:
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
