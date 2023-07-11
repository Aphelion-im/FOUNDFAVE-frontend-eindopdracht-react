import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Loader } from '../assets/loaders/infinity-loader.svg';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import isTokenValid from '../helpers/isTokenValid';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [isAuth, toggleIsAuth] = useState({
    isAuth: false,
    user: null,
    status: 'pending',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token && isTokenValid(token)) {
      const decoded = jwt_decode(token);
      fetchUserData(decoded.sub, token);
    } else {
      toggleIsAuth({
        isAuth: false,
        user: null,
        status: 'done',
      });
    }
  }, []);

  function login(JWT) {
    localStorage.setItem('token', JWT);
    const decoded = jwt_decode(JWT);
    fetchUserData(decoded.sub, JWT, '/favorites');
  }

  function logout() {
    localStorage.removeItem('token');
    toggleIsAuth({
      isAuth: false,
      user: null,
      status: 'done',
    });
    navigate('/');
  }

  async function fetchUserData(id, token, redirectUrl) {
    try {
      const result = await axios.get(
        `https://frontend-educational-backend.herokuapp.com/api/user/`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toggleIsAuth({
        ...isAuth,
        isAuth: true,
        user: {
          username: result.data.username,
          email: result.data.email,
          id: result.data.id,
        },
        status: 'done',
      });

      if (redirectUrl) {
        navigate(redirectUrl);
      }
    } catch (e) {
      console.error(e);
      toggleIsAuth({
        isAuth: false,
        user: null,
        status: 'done',
      });
    }
  }

  const contextData = {
    isAuth: isAuth.isAuth,
    user: isAuth.user,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {isAuth.status === 'done' ? (
        children
      ) : (
        <Loader className="loading-authcontext" />
      )}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
