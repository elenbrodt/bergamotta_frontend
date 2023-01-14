import BlogComponent from "../../components/BlogArticle";
import Header from "../../components/Header"
import { ContainerBlog, CommentTitle } from "./styles"
import { Footer } from "../../components/Footer";
import { useUser } from "../../store/modules/user";
// import { useEffect, useState } from "react";
// import { byIdUser } from "../../services/MainApi/user_profile";
import BlogCommentComponent from "../../components/BlogComment"
import ListBlogComments from "../../components/BlogCommentsList"

// interface UserDataProps {
//     id: string;
//     name: string;
//     image_link: string;    
//   }


function BlogArticle() {
    const urlId = window.location.pathname.split("/")[2];

    const userData = useUser();
  const idUser = userData.findUser.id;

//   const [user, setUser] = useState<UserDataProps>();
//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await byIdUser(idUser);
//         setUser(response.data);
//       } catch (error) {
//         alert("Deu algo errado no catch");
//       }
//     };
//     getData();
    
//   }, [setUser, idUser]);

    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <main>
                <ContainerBlog>
                    {BlogComponent(urlId)}
                </ContainerBlog>  
                {userData.isLogged && BlogCommentComponent(idUser)}     
                {!userData.isLogged && <a href="/login">Logar para comentar</a>}
                <CommentTitle>Comentários</CommentTitle>
                <ListBlogComments/>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default BlogArticle