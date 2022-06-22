import { useAppDispatch } from 'app/hooks';
import { LOGOUT_SUCCESS } from 'constants/Messages';
import { logout } from 'features/Login/loginSlice';
import { notificationSuccess } from 'helper/Notification';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Logout() {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  useEffect(() => {
    // localStorage.removeItem('accessToken');
    // localStorage.removeItem('refreshToken');
    // localStorage.removeItem('role');
    notificationSuccess(LOGOUT_SUCCESS, 1000);
    localStorage.removeItem('token');
    dispatch(logout());
    nav('/login');
  }, []);
  return <div>Logout</div>;
}
