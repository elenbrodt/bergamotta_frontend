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
  TitleComments,
  LittleTitles,
} from "./styles";
import { Footer } from "../../components/Footer";
import { useUser } from "../../store/modules/user";
import { useEffect, useState } from "react";
import { byIdUser } from "../../services/MainApi/user_profile";
import ListBlogComments from "../../components/BlogCommentsList";
import {
  blogCommentList,
  createBlogComment,
} from "../../services/MainApi/blog_comment";
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
interface User {
  image_link: string;
  name: string;
}

interface BlogCommentList {
  id: string;
  date: string;
  comment: string;
  user: User;
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
      } catch (error) {}
    };
    getBlog();
    if (userData.isLogged) {
      const getData = async () => {
        try {
          const response = await byIdUser(userData.findUser.id);
          setUser(response.data);
        } catch (error) {}
      };
      getData();
    }
  }, [setUser, urlId, userData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    blogCommentCreate(data.comment, "", urlId, userData.findUser.id);
  };
  const blogCommentCreate = async (
    comment: string,
    date: string,
    recipe_id: string,
    user_id: string
  ) => {
    const req = {
      comment: comment,
      date: date,
      recipe_id: recipe_id,
      user_id: user_id,
    };
    try {
      const response = await createBlogComment(req, urlId);
    } catch (error) {}
  };

  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };

  const [blogComments, setBlogComment] = useState<BlogCommentList[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await blogCommentList(urlId);
        setBlogComment([
          ...blogComments,
          {
            id: response.data.id,
            date: response.data.date,
            comment: response.data.comment,
            user: response.data.user,
          },
        ]);
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getData();
  }, [setBlogComment]);

  return (
    <div className='App'>
      <Header />
      <div>
        <ArticleContainer>
          <ArticleImg src={blog?.image_link} alt='Imagem Titulo' />
          <TitleBlog>{blog?.name}</TitleBlog>
          <SubtitleBlog>{blog?.subtitle}</SubtitleBlog>
          <IntroductionBlog>{blog?.introduction}</IntroductionBlog>
          <LittleTitles>Ingredientes</LittleTitles>
          <TextBlog>{blog?.ingredients}</TextBlog>
          <LittleTitles>Passo a passo</LittleTitles>
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
                <CommentInput
                  {...register("comment", { required: true })}
                  name='comment'
                  placeholder='Faça um comentário'
                />
                <br></br>
                {errors.comment && <p>Esse campo é obrigatório</p>}
                <CommentBtn onClick={reset}>Comentar</CommentBtn>
              </FormDiv>
            </GeneralDiv>
          </Container>
        )}
        {!userData.isLogged && (
          <LoginLink href='/login'>Logar para comentar</LoginLink>
        )}
        <TitleComments>Comentários</TitleComments>
        <ListBlogComments key={seed} />
      </div>
      <Footer />
    </div>
  );
}

export default BlogArticle;
