import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { PublicRoute, PrivateRoute } from '../components';

import { Home, Login, Signup } from '../screens';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/login' element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
            </Route>

            <Route path='/signup' element={<PublicRoute />}>
                <Route path="/signup" element={<Signup />} />
            </Route>

            <Route path='/' element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
            </Route>

        </Routes>
    )
}

export default AppRouter;