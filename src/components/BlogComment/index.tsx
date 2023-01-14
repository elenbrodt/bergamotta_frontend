import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { byIdUser, createBlogComment } from '../../services/MainApi/blog_comment';
import { Container, GeneralDiv, TitleDiv, CommentTitle, UserDiv, UserImg, UserName, FormDiv, CommentInput, CommentBtn } from "./style"
import { useUser } from "../../store/modules/user";


interface BlogComment {
    id: string;
    image_link: string;
    name: string;
}

export default function BlogCommentComponent(id: string) {

    const [blogComment, setBlogComment] = useState<BlogComment>()

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await byIdUser(id);
                setBlogComment(response.data)
            } catch (error) {
                alert("Deu algo errado no catch");
            }
        };
        getData();
    }, [setBlogComment, id]);

        const { register, handleSubmit } = useForm();
      
        const [comment, setComment] = useState("");
        const [date, setDate] = useState("");
        const [recipe_id, setRecipe_id] = useState("");
        const [user_id, setUser_id] = useState("");
        
        const urlId = window.location.pathname.split("/")[2];
        const userToken = useUser()
        const token = userToken.findUser.id

        const onSubmit = (data: any,) =>{
          setComment(data.comment)
          setDate("")
          setRecipe_id(urlId)
          setUser_id(id)          
          blogCommentCreate()
          console.log(data)
        }
        const blogCommentCreate = async () => {    
            const req ={
                comment: comment, 
                date: date, 
                recipe_id: recipe_id, 
                user_id: user_id,
                token: token
                }
            try {
              const response = await createBlogComment(req, urlId);
              console.log(response)
            } catch (error) {
              alert("Deu algo errado no catch");
            }
          };

    
    return (
        <Container>
            <TitleDiv>
                <CommentTitle>Comentar</CommentTitle>
            </TitleDiv>
            <GeneralDiv>
                <UserDiv>
                    <UserImg src={blogComment?.image_link} alt="Imagem User" />
                    <UserName>
                        {blogComment?.name}
                    </UserName>
                </UserDiv>
                <FormDiv onSubmit={handleSubmit(onSubmit)}>
                    <CommentInput {...register("comment")}/>
                    <CommentBtn>Comentar</CommentBtn>
                </FormDiv>
            </GeneralDiv>
        </Container>
    );
}

