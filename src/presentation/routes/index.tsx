import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { FormEvent } from '../pages/FormEvent';

export function AppRoute() {
    return (
        <Routes>
            <Route path='/home' element={<Home />}>
                <Route path='form' element={<FormEvent />} />
            </Route>
            <Route path='/login' element={<Login />} />
        </Routes>
    );
}
