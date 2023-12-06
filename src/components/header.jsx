import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import { Home, Gamepad2, Swords, CircleUserRound, Power } from 'lucide-react';

export default function Header() {
  const navigate = useNavigate();
  const AuthCheck = localStorage.getItem('isLoggedIn');

  const rlogin = () => {
    if (AuthCheck) {
      navigate('/dashboard/games');
    } else {
      navigate('/login');
    }
  };

  const rhome = () => {
    navigate('/');
  };

  const rgames = () => {
    navigate('/Games');
  };

  const revents = () => {
    navigate('/Events');
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
          <input id="tab-4" type="radio" name="group" onClick={rlogin} />
          <div className="buttons">
            <label htmlFor="tab-1"> <Home size={28} /> </label>
            <label htmlFor="tab-2"> <Gamepad2 size={28} /></label>
            <label htmlFor="tab-3"> <Swords size={28} /> </label>
            <label htmlFor="tab-4">
              {AuthCheck ? <Power size={28} color="#ff0000" strokeWidth={2.5} /> : <CircleUserRound size={28} />}
            </label>
            <div className="underline" />
          </div>
        </div>
      </nav>
    </>
  );
}
