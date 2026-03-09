import { lazy, Suspense } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

//import HomePage from "@/pages/HomePage";
//import DynamicPage from "@/pages/DynamicPage";

const DynamicPage = lazy(() => import('@/pages/DynamicPage'))
const HomePage = lazy(() => import('@/pages/HomePage'))

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
        <Route
            index
            element={
                <Suspense fallback={<h1 style={{ fontSize: '3rem', fontWeight: "bold" }}>loading homepage page...</h1>}>
                    <HomePage />
                </Suspense>} />
        <Route
            path='/:slug'
            element={
                <Suspense fallback={<h1 style={{ fontSize: '3rem', fontWeight: "bold" }}>loading dyn page...</h1>}>
                    <DynamicPage />
                </Suspense>} />
    </Route>
))