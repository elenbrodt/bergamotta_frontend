import { useEffect, useState } from "react";
import { listBlog } from "../../services/MainApi/blog";
import CardBlog from "../CardBlog";
import { DivCard } from "./styles";

interface BlogList {
  id: string;
  image_link: string;
  name: string;
  subtitle: string;
}

export default function ListBlogs() {
  const [posts, setPosts] = useState<BlogList[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await listBlog();
        setPosts(response.data);
      } catch (error) {}
    };
    getData();
  }, [setPosts]);

  return (
    <DivCard>
      {posts.map((posts, index) => {
        return (
          <CardBlog
            id={posts.id}
            image_link={posts.image_link}
            name={posts.name}
            subtitle={posts.subtitle}
            key={index}
          />
        );
      })}
    </DivCard>
  );
}
