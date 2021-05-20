import axios from 'axios';

import { store } from './store';

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const calculateRem = size => `${(size / 16) * 1}rem`;

export const debounce = (func, wait, immediate) => {
  let timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
export const formatNumber = n => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return `${+(n / 1e3).toFixed(1)}K`;
  if (n >= 1e6 && n < 1e9) return `${+(n / 1e6).toFixed(1)}M`;
  if (n >= 1e9 && n < 1e12) return `${+(n / 1e9).toFixed(1)}B`;
  if (n >= 1e12) return `${+(n / 1e12).toFixed(1)}T`;

  return false;
};
const storeActions = store.getActions();

export const handleApiError = error => {
  const err =
    error && error.response && error.response.data
      ? error.response.data
      : error;

  return {
    ok: false,
    result: null,
    err,
  };
};

export const handleApiSuccess = result => ({
  ok: true,
  result,
  error: null,
});
export const handleApiCall = async (
  endpoint,
  payload,
  headers = { 'Access-Control-Allow-Origin': '*' },
  callBack = null,
) => {
  try {
    const { data, error } = await axios.get(endpoint, payload, headers);

    if (error) {
      return handleApiError(error);
    }

    if (callBack) {
      callBack(data);
    }

    return handleApiSuccess(data.data);
  } catch (error) {
    const err =
      error && error.response && error.response.data
        ? error.response.data
        : error;
    return handleApiError(err);
  }
};
