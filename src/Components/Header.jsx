import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const {user , signOutUser}= useContext(AuthContext)
    const link =<>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/login"}>logIn</NavLink></li>
    <li><NavLink to={"/Register"}>Register</NavLink></li>
    </>
    return (
        <div className="navbar bg-primary bg-opacity-50 text-white mx-auto rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {link}
                    </ul>
                </div>
                <a className="btn btn-ghost hover:bg-transparent text-xl"><img className='w-full h-full' src="https://nubi.uicore.co/wp-content/uploads/2023/09/nubi-logo.webp" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {link}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !user?<Link className='btn btn-outline' to={"/logIn"}>Log In</Link>:<button onClick={()=>signOutUser()} className=' btn btn-outline bg-red-600'>Log Out</button>
                }
               
            </div>
        </div>
    );
};

export default Header;