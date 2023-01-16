import Header from "../../components/Header";
import {
  CommentTitle,
  Container,
  TitleDiv,
  GeneralDiv,
  UserDiv,
  UserImg,
  UserName,
  FormDiv,
  CommentInput,
  CommentBtn,
  ArticleContainer,
  ArticleImg,
  SubtitleBlog,
  TextBlog,
  IntroductionBlog,
  TitleBlog,
  LoginLink,
  TitleComments
} from "./styles";
import { Footer } from "../../components/Footer";
import { useUser } from "../../store/modules/user";
import { useEffect, useState } from "react";
import { byIdUser } from "../../services/MainApi/user_profile";
import ListBlogComments from "../../components/BlogCommentsList";
import { createBlogComment } from "../../services/MainApi/blog_comment";
import { useForm } from "react-hook-form";
import { byIdBlog } from "../../services/MainApi/blog";

interface UserDataProps {
  id: string;
  name: string;
  image_link: string;
}
interface Blog {
  id: string;
  image_link: string;
  name: string;
  subtitle: string;
  introduction: string;
  ingredients: string;
  directions: string;
}

function BlogArticle() {
  const urlId = window.location.pathname.split("/")[2];

  const userData = useUser();

  const [user, setUser] = useState<UserDataProps>();

  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await byIdBlog(urlId);
        setBlog(response.data);
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getBlog();
    if (userData.isLogged) {
      const getData = async () => {
        try {
          const response = await byIdUser(userData.findUser.id);
          setUser(response.data);
        } catch (error) {
          alert("Deu algo errado no catch");
        }
      };
      getData();
    }
  }, [setUser, urlId, userData]);

  const { register, handleSubmit } = useForm();
    
  const onSubmit = (data: any) => {
    
    blogCommentCreate(
      data.comment,
      "",
      urlId,
      userData.findUser.id,      
    );
  };
  const blogCommentCreate = async (
    comment: string,
    date: string,
    recipe_id: string,
    user_id: string,   
  ) => {
    const req = {
      comment: comment,
      date: date,
      recipe_id: recipe_id,
      user_id: user_id, 
    };
    try {
      const response = await createBlogComment(req, urlId);
      console.log(response);
    } catch (error) {
      alert("Deu algo errado no catch");
    }
  };

  return (
    <div className='App'>
      <header>
        <Header />
      </header>
      <main>
        <ArticleContainer>
          <ArticleImg src={blog?.image_link} alt='Imagem Titulo' />
          <TitleBlog>{blog?.name}</TitleBlog>
          <SubtitleBlog>{blog?.subtitle}</SubtitleBlog>
          <IntroductionBlog>{blog?.introduction}</IntroductionBlog>
          <p>INGREDIENTES</p>
          <TextBlog>{blog?.ingredients}</TextBlog>
          <p>PASSO A PASSO</p>
          <TextBlog>{blog?.directions}</TextBlog>
        </ArticleContainer>
        {userData.isLogged && (
          <Container>
            <TitleDiv>
              <CommentTitle>Comentar</CommentTitle>
            </TitleDiv>
            <GeneralDiv>
              <UserDiv>
                <UserImg src={user?.image_link} alt='Imagem User' />
                <UserName>{user?.name}</UserName>
              </UserDiv>
              <FormDiv onSubmit={handleSubmit(onSubmit)}>
                <CommentInput {...register("comment")} name='comment' />
                <CommentBtn>Comentar</CommentBtn>
              </FormDiv>
            </GeneralDiv>
          </Container>
        )}
        {!userData.isLogged && <LoginLink href='/login'>Logar para comentar</LoginLink>}
        <TitleComments>Comentários</TitleComments>
        <ListBlogComments />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default BlogArticle;
