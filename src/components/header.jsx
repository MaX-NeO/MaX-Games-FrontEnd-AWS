import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import Cookies from 'js-cookie';

export default function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') === 'true');

  const rhome = () => {
    navigate('/');
  };

  const rgames = () => {
    navigate('/Games');
  };

  const revents = () => {
    navigate('/Events');
  };

  const rlogin = () => {
      navigate('/login');
  };

  return (
    <>
      <nav className="navbar">
        <div className='logo-span'>
          <img src={Logo} alt='logo' className='logo-img'/>
        </div>
        <div className="tabs">
          <input id="tab-1" type="radio" name="group" onClick={rhome}/>
          <input id="tab-2" type="radio" name="group" onClick={rgames} />
          <input id="tab-3" type="radio" name="group" onClick={revents}/>
          <input id="tab-4" type="radio" name="group" onClick={rlogin}/>
          <div className="buttons">
            <label className="material-symbols-outlined" htmlFor="tab-1"> home </label>
            <label className="material-symbols-outlined" htmlFor="tab-2"> sports_esports </label>
            <label className="material-symbols-outlined" htmlFor="tab-3">
              gamepad
            </label>
            <label className="material-symbols-outlined" htmlFor="tab-4">
              {isLoggedIn ? 'power_settings_new' : 'account_circle'}
            </label>
            <div className="underline" />
          </div>
        </div>
      </nav>
    </>
  );
}
