import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Partners from "./pages/Partners";
import Search from "./pages/Search";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import RestaurantLocked from "./pages/Place";
import UpdateUser from "./pages/ConfigUser";
import UserProfile from "./pages/UserProfile";
import BlogArticle from "./pages/BlogArticle";
import SignUpPlace from "./pages/SignUpPlace";
import ConfigUser from "./pages/ConfigUser";
import PlaceProfile from "./pages/PlaceProfile";
import ConfigPlace from "./pages/ConfigPlace";
import PlaceOwnerCheck from "./pages/PlaceOwnerCheck";
import AboutUs from "./pages/AboutUs";

export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path='/parceiros' element={<Partners />} />
        <Route path='/' element={<Search />} />
        <Route path='/sobrenos' element={<AboutUs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<SignUp />} />
        <Route path='/restaurantlocked/:id' element={<RestaurantLocked />} />
        <Route path='/restaurantlocked' element={<RestaurantLocked />} />
        <Route path='/atualizarusuario' element={<UpdateUser />} />
        <Route path='/perfil' element={<UserProfile />} />
        <Route path='/blogarticle/:id' element={<BlogArticle />} />
        <Route path='/cadastrorestaurante' element={<SignUpPlace />} />
        <Route path='/editarperfil' element={<ConfigUser />} />
        <Route path='/restauranteperfil' element={<PlaceProfile />} />
        <Route path='/editarperfilrestaurante/:id' element={<ConfigPlace />} />
        <Route path='/verificarcadastro' element={<PlaceOwnerCheck />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}
