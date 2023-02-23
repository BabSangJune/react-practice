import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Portal from '../pages/Portal';
import Home from '../pages/Home';
import Reducer from '../pages/Reducer';
import Remain from '../pages/Remain';
import Memoization from '../pages/Memoization';
import LifeCycleClass from '../pages/LifeCycleClass';
import LifeCycleFunc from '../pages/LifeCycleFunc';

const MyComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/portal" element={<Portal />} />
                    <Route path="/reducer" element={<Reducer />} />
                    <Route path="/memoization" element={<Memoization />} />
                    <Route path="/remain" element={<Remain />} />
                    <Route path="/lifeCycleClass" element={<LifeCycleClass />} />
                    <Route path="/lifeCycleFunc" element={<LifeCycleFunc />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default MyComponent;
