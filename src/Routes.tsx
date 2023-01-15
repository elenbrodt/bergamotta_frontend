import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom';
import Partners from "./pages/Partners"
import Search from "./pages/Search"
import About from './pages/About';
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import Blog from './pages/Blog';
import RestaurantLocked from './pages/RestauranteLocked';
import UpdateUser from './pages/ConfigUser';
import UserFavorites from './pages/UserFavorites';
import BlogArticle from './pages/BlogArticle';
import SignUpPlace from './pages/SignUpPlace';
import CadastroOwner from "./pages/CadastroOwner";

export default function Routes() {
    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path="/parceiros" element={<Partners />} />
                <Route path="/" element={<Search />} />
                <Route path="/sobrenos" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<SignUp />} />
                <Route path="/restaurantlocked/:id" element={<RestaurantLocked />} />
                <Route path="/restaurantlocked" element={<RestaurantLocked />} />
                <Route path ="/atualizarusuario" element={<UpdateUser />} />
                <Route path="/perfil" element={<UserFavorites />} />
                <Route path="/blogarticle/:id" element={<BlogArticle />} />
                <Route path="/cadastrorestaurante" element={<SignUpPlace />} />
                <Route path="/cadastroowner" element={<CadastroOwner/>}/>
            </WrapperRoutes>        
        </BrowserRouter>
    );
}