import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from '../GlobalStyle';

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Layout from "../components/Layout/Layout";
import Profile from "../pages/Profile"


const Router = () => {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <BrowserRouter>
                <Routes>
                    {/* TODO : 로그인 창 먼저 보이게 설정 */}
                    <Route path="Login/" element={<Login />}></Route>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="Detail/:id" element={<Detail />}></Route>
                        <Route path="Profile/:userid" element={<Profile />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default Router;

