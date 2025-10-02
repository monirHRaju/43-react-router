import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import SideBar from '../sidebar/SideBar';
import './Root.css'
const Root = () => {
    return (
        <div>
            <Header />
            <div className='root-main'>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Root;

/**
 * 1. use: usersPromise >suspensiton > primse > use(userPromise)
 * 2. [less use so far] > useStat +useEffect (()=>{}, [])
 * 3. set loader in the route defination: load data before router component is rendered
*/