import { byIdBlog } from "../../services/MainApi/blog";
import { useEffect, useState } from "react";
import {
  ArticleImg,
  ArticleContainer,
  TitleBlog,
  SubtitleBlog,
  IntroductionBlog,
  TextBlog,
} from "./style";

interface Blog {
  id: string;
  image_link: string;
  name: string;
  subtitle: string;
  introduction: string;
  ingredients: string;
  directions: string;
}

export default function BlogComponent(id: string) {
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await byIdBlog(id);
        setBlog(response.data);
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getData();
  }, [setBlog, id]);
  return (
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
  );
}
