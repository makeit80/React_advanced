import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import GlobalStyle from '../GlobalStyle';


const Router = () => {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="Detail/:id" element={<Detail />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default Router;

