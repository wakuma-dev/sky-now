import React, {Suspense, lazy} from 'react';
import {Routes, Route } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout'
const Home = lazy(() => import("../../pages/home/Home.jsx"));
import Loader from '../../components/common/Loader.jsx';
export default function AppRouter(){


    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader /></div>}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </Suspense>
    )
}