import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
    return (
       <div className='container mx-auto'>
       <Header/>
       <Outlet></Outlet>
       
       </div>
    );
};

export default LayOut;