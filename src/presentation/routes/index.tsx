import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { FormEvent } from '../pages/FormEvent';

export function AppRoute() {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />} />
            <Route path='/form' element={<FormEvent />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    );
}
