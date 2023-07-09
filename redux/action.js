import {ADD_BUDGET} from './constant';

export const addBudget = item => {
  return {
    type: ADD_BUDGET,
    data: item,
  };
};
