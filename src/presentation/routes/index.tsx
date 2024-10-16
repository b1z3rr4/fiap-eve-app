import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { FormEvent } from '../pages/FormEvent';
import { LoginRedirect, PrivateRoute } from '../components/features/Redirect';

export function AppRoute() {
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path='/home' element={<Home />} />
                <Route path='/form' element={<FormEvent />} />
            </Route>
            <Route element={<LoginRedirect />}>
                <Route path='/login' element={<Login />} />
            </Route>
        </Routes>
    );
}
