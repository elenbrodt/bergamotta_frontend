import { useUser } from "../../store/modules/user";
import { byIdUser } from "../../services/MainApi/blog_comment";
import { useEffect, useState } from "react";

interface CardBlogCommentProps {
    id: string;
    comment: string;
    date: string;
}

interface UserCommentProps {
    id: string;
    image_link: string;
    name: string;
}


function BlogCommentCard(props: CardBlogCommentProps, prop: UserCommentProps) {
    const userData = useUser()
    const idUser = userData.findUser.id;

    const [user, setUser] = useState<UserCommentProps>();
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await byIdUser(idUser);
                setUser(response.data);
            } catch (error) {
                alert("Deu algo errado no catch");
            }
        };
        getData();

    }, [setUser, idUser]);


    return (
        <div>
            <div>
                <img src={prop.image_link} alt="imagem user" />
                <h2>{prop.name}</h2>
            </div>
            <div>
                <p>{props.date}</p>
                <p>{props.comment}</p>
            </div>
        </div>
    )
}
export default BlogCommentCard;