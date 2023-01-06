import {Routes as WrapperRoutes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home"
import Search from "./pages/Search"
import About from './pages/About';
import Blog from './pages/Blog';

export default function Routes() {
    return (  
    <BrowserRouter>
        <WrapperRoutes>
            <Route path="" element={<Home/>}/>
            <Route path="/buscarestaurantes" element={<Search/>}/>
            <Route path="/sobrenos" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>           
        </WrapperRoutes>
    </BrowserRouter>   
    )}