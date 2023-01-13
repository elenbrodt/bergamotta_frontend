import { useEffect, useState } from "react";
import { byIdUser } from '../../services/MainApi/blog_comment';
import { Container, GeneralDiv, TitleDiv, CommentTitle, UserDiv, UserImg, UserName, FormDiv, CommentInput, CommentBtn } from "./style"


interface BlogComment {
    id: string;
    image_link: string;
    name: string;
}

export function BlogCommentComponent(id: string) {

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
                <FormDiv>
                    <CommentInput />
                    <CommentBtn>Comentar</CommentBtn>
                </FormDiv>
            </GeneralDiv>
        </Container>
    );
}