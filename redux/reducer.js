import {ADD_BUDGET} from './constant';

const initialState = [];
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUDGET:
      return [...state, action.data];
    default:
      return state;
  }
};
