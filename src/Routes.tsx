import {Routes as WrapperRoutes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home"
import Search from "./pages/Search"
import About from './pages/About';
import Login from './pages/Login'

export default function Routes() {
    return (  
    <BrowserRouter>
        <WrapperRoutes>
            <Route path="/" element={<Search/>}/>
            <Route path="/restaurantes" element={<Home/>}/>
            <Route path="/sobrenos" element={<About/>}/>   
            <Route path="/login" element={<Login/>}/>           
        </WrapperRoutes>
    </BrowserRouter>   



    )}