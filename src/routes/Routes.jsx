import React, {useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import {lazy, Suspense} from 'react';
import Loader from "../components/Loader/Loader";
import PrivateRoute from "./PrivateRoute";
import PublicRouter from "./PublicRouter";
import s from './Routes.module.css'
import {setUserData} from "../redux/auth/authOperations";
import {useDispatch} from "react-redux";

const Main = lazy(() => import("../page/main/Main"));
const Login = lazy(() => import("../page/login/Login"));

const AppRoutes = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem('auth'))
        if (auth) {
            dispatch(setUserData(auth))
        }
    }, [dispatch])
    return (
        <Suspense fallback={<Loader/>}>
            <div className={s.wrap}>
                <Routes>
                    <Route path="/" element={
                        <PrivateRoute>
                            <Main/>
                        </PrivateRoute>
                    }/>
                    <Route path="/login" element={
                        <PublicRouter>
                            <Login/>
                        </PublicRouter>
                    }/>
                </Routes>
            </div>
        </Suspense>
    );
}

export default AppRoutes;