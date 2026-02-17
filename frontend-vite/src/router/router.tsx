import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import MainLayout from "@/layouts/MainLayout";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
    </Route>
))