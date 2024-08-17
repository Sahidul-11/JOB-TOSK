import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const LayOut = () => {
    return (
       <div className='container mx-auto'>
       <Header/>
       <Outlet></Outlet>
       <Footer/>
       
       </div>
    );
};

export default LayOut;