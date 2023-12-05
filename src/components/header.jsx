import React, { useState,useEffect, Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import Cookies from 'js-cookie';
import { Home,Gamepad2,Swords,CircleUserRound,Power } from 'lucide-react';
export default function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Cookies.get('isLoggedIn') === 'true');
  }, []);

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
    if (isLoggedIn) {
      navigate('/dashboard/games');
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    const handleCookieChange = () => {
      setIsLoggedIn(Cookies.get('isLoggedIn') === 'true');
    };   
    window.addEventListener('change', handleCookieChange);
    return () => {
      window.removeEventListener('change', handleCookieChange);
    };
  }, []);

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
            <label htmlFor="tab-1"> <Home size={28} /> </label>
            <label  htmlFor="tab-2"> <Gamepad2 size={28} /></label>
            <label  htmlFor="tab-3"> <Swords size={28} /> </label>
            <label  htmlFor="tab-4">
              {isLoggedIn ? <Power size={28} /> : <CircleUserRound size={28} />}
            </label>
            <div className="underline" />
          </div>
        </div>
      </nav>

    </>
  );
}
