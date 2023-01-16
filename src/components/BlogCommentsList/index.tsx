import { useEffect, useState } from "react";
import { blogCommentList } from "../../services/MainApi/blog_comment";
import CardBlogComment from "../../components/CardBlogComments";

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

export default function ListBlogComments() {
  const urlRecipeId = window.location.pathname.split("/")[2];
  const [blogComments, setBlogComment] = useState<BlogCommentList[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await blogCommentList(urlRecipeId);
        setBlogComment(response.data);
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getData();
  }, [setBlogComment, urlRecipeId]);

  return (
    <div>
      {blogComments.map(
        (blog, index) =>
          index < 5 && (
            <CardBlogComment
              id={blog.id}
              date={blog.date}
              comment={blog.comment}
              user={blog.user}
            />
          )
      )}
    </div>
  );
}
