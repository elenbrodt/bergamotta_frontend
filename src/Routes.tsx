import {Routes as WrapperRoutes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home"
import Search from "./pages/Search"
import About from './pages/About';
import Login from './pages/Login'
import SignIn from './pages/SignIn';
import Blog from './pages/Blog';
import RestaurantLocked from './pages/RestauranteLocked';
import ConfigUser from './pages/ConfigUser';
import UserFavorites from './pages/UserFavorites';
import BlogArticle from './pages/BlogArticle';
import SignInPlace from './pages/SignInPlace';

export default function Routes() {
    return (  
    <BrowserRouter>
        <WrapperRoutes>
            <Route path="/" element={<Search/>}/>
            <Route path="/home" element={<Home/>}/>
             <Route path="/sobrenos" element={<About/>}/>    
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<SignIn/>}/>
            <Route path="/restaurantlocked/:id" element={<RestaurantLocked/>}/>         
            <Route path="/restaurantlocked" element={<RestaurantLocked/>}/> 
            <Route path="/configuser" element={<ConfigUser/>}/>         
            <Route path="/userfavorites" element={<UserFavorites/>}/>        
            <Route path="/blogarticle/:id" element={<BlogArticle/>}/>  
            <Route path="cadastrorestaurante" element={<SignInPlace/>}/>
        </WrapperRoutes>
    </BrowserRouter>
    )}