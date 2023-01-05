import {Routes as WrapperRoutes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home"
import Inicio from "./pages/Inicio"

export default function Routes() {
    return (  
    <BrowserRouter>
        <WrapperRoutes>
            <Route path="" element={<Home/>}/>
            <Route path="/inicio" element={<Inicio/>}/>
        </WrapperRoutes>
    </BrowserRouter>   
    )}