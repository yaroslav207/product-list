import {createAction} from '@reduxjs/toolkit';

import {
  auth as authService, notification,
} from 'src/services/services';


const ActionType = {
  SET_USER: 'profile/set-user',
};

const setUser = createAction(ActionType.SET_USER, (user) => ({
  payload: {
    user,
  },
}));

const login = ({authPayload}) => async (dispatch) => {
  try {
    const user = await authService.login(authPayload);
    dispatch(setUser(user));
  } catch (err) {
    return notification.error('Error', err);
  }
};

const register = ({authPayload}) => async (dispatch) => {
  try {
    const user = await authService.register(authPayload);
    dispatch(setUser(user));
  } catch (err) {
    return notification.error('Error', err);
  }
};

const logout = () => async (dispatch) => {
  try {
    await authService.logout();
    dispatch(setUser(null));
  } catch (err) {
    return notification.error('Error', err);
  }
};

export {
  login,
  register,
  logout,
  setUser,
};


