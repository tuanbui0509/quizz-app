import { useAppDispatch, useAppSelector } from 'app/hooks';
import { LOGOUT_SUCCESS } from 'constants/Messages';
import { logout } from 'features/Login/loginSlice';
import { notificationSuccess } from 'helper/Notification';
import useLoading from 'hooks/useLoading';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Logout() {
  // const [Loading, Hidden, Display] = useLoading();
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const isLogin = useAppSelector((state) => state.login.value);

  console.log('render');
  localStorage.removeItem('token');
  dispatch(logout());
  notificationSuccess(LOGOUT_SUCCESS, 1000);
  // Hidden();
  nav('/login');
}
