import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AdminSignIn } from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../assets/img/logo.png';

export default function AdminLogin() {
    const navigate = useNavigate();
    const [signin, setSignin] = useState({
        username: '',
        password: ''
    });
    const handleChange = (e) => {
        setSignin({ ...signin, [e.target.id]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const toaster = toast.loading("Please wait...", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            isLoading: false
        })
        try {
            const res = await AdminSignIn(signin.username, signin.password);
            if (res.data === "Login Successful !") {

                localStorage.setItem('Usernamez', signin.username);
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('isAdmin', 'true');
                toast.update(toaster, { render: "Login Successful !", type: "success", isLoading: false });
                setTimeout(() => {
                    navigate('/Admin/dashboard');
                }, 1500);

            } else if (res.data === "Invalid Password") {
                toast.update(toaster, { render: "Invalid Password!", type: "error", isLoading: false });
            } else {
                toast.update(toaster, { render: "Invalid Username!", type: "error", isLoading: false });
            }
        }
        catch (error) {
            toast.update(toaster, { render: "Error! Try again later", type: "error", isLoading: false });
            console.error('An error occurred:', error);
        }
    };
    return (
        <>
            <div className='mainxz'>
                <div className=''>
                    <div className="login-container">
                        <div className="login-form">
                            <div className="login-form-inner">
                                <div className="logo"><svg height={512} viewBox="0 0 192 192" width={512} xmlns="http://www.w3.org/2000/svg">
                                    <path d="m155.109 74.028a4 4 0 0 0 -3.48-2.028h-52.4l8.785-67.123a4.023 4.023 0 0 0 -7.373-2.614l-63.724 111.642a4 4 0 0 0 3.407 6.095h51.617l-6.962 67.224a4.024 4.024 0 0 0 7.411 2.461l62.671-111.63a4 4 0 0 0 .048-4.027z" />
                                </svg></div>
                                <h1 className="logtext">Admin Login</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="login-form-group textInputWrapper">
                                        <input type="text" placeholder="Username" id="username" value={signin.username} onChange={handleChange} required className='textInput' />
                                    </div>
                                    <div className="login-form-group textInputWrapper">
                                        <input autoComplete="off" type="password" placeholder="Password" id="password" value={signin.password} onChange={handleChange} required className='textInput' />
                                    </div>
                                    <button className="button-m-x mb-1" type='submit'>
                                        <span>Login</span>
                                        <div className="top green"></div>
                                        <div className="left green"></div>
                                        <div className="bottom green"></div>
                                        <div className="right green"></div>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="onboarding">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide color-1">
                                        <div className="slide-image">
                                            <img src={Logo} loading="lazy" alt="img" />
                                        </div>
                                        <div className="slide-content">
                                            <h2>Turn your skills into reality.</h2>
                                            <p>`[`Play - Eat - Sleep `]`</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"/>
        </>
    )
}
