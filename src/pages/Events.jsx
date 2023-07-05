import React from 'react'
import Loader from '../components/loader'
import { useState } from 'react';
import Cookies from 'js-cookie';
import imgE1 from '../assets/img/events/event1.jpg';
import imgE2 from '../assets/img/events/event2.jpg';
import imgE3 from '../assets/img/events/event3.jpg';
import imgE4 from '../assets/img/events/event4.jpg';

export default function Events() {

  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') === 'true');
  return (
    <>
      <Loader />


      <div className='main'>
        {isLoggedIn ?
          <div className='event-topbar'>
            Welcome Back {Cookies.get('Usernamex')} !
          </div>
          :
          <div></div>
        }
        <div className='event-x-content'>
          <div className='event-x-card'>
            <div className='event-x-card-l'>
              <div className='event-x-card-title'>
                <h1>
                  Save the date for our double feature event
                </h1>
              </div>
              <div className='event-x-card-desc'>
                <p>
                  Join us at 10:30 PM IST on 11 June for the Xbox Games Showcase followed by Starfield Direct.
                </p>
              </div>
            </div>
            <div className='event-x-card-r'>
              <img src={imgE1} alt='event-img' />
            </div>
          </div>
          <div className='event-x-card'>
            <div className='event-x-card-r'>
              <img src={imgE2} alt='event-img' />
            </div>
            <div className='event-x-card-l'>
              <div className='event-x-card-title'>
                <h1>
                  Convergence: A League of Legends Story
                </h1>
              </div>
              <div className='event-x-card-desc'>
                <p>
                  Rewind the past, control the future
                </p>
              </div>
            </div>
          </div>
          <div className='event-x-card'>
            <div className='event-x-card-l'>
              <div className='event-x-card-title'>
                <h1>
                  Call of Duty®: Modern Warfare II
                </h1>
              </div>
              <div className='event-x-card-desc'>
                <p>
                  Season 03 Reloaded features a new map, modes and new co-op missionss
                </p>
              </div>
            </div>
            <div className='event-x-card-r'>
              <img src={imgE3} alt='event-img' />
            </div>
          </div>
          <div className='event-x-card'>
            <div className='event-x-card-r'>
              <img src={imgE4} alt='event-img' />
            </div>
            <div className='event-x-card-l'>
              <div className='event-x-card-title'>
                <h1>
                EA SPORTS™ FIFA 23
                </h1>
              </div>
              <div className='event-x-card-desc'>
                <p>
                Experience The World's Game with PC Game Pass or Ultimate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
