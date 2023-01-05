import {Routes as WrapperRoutes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home"
import Search from "./pages/Search"

export default function Routes() {
    return (  
    <BrowserRouter>
        <WrapperRoutes>
            <Route path="" element={<Home/>}/>
            <Route path="/buscarestaurantes" element={<Search/>}/>
        </WrapperRoutes>
    </BrowserRouter>   
    )}