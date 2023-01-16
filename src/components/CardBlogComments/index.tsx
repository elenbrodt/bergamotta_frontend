import {
  MainDiv,
  UserDiv,
  UserImage,
  UserName,
  CommentDiv,
  Comment,
} from "./style";
interface User {
  image_link: string;
  name: string;
}

interface CardBlogCommentProps {
  id: string;
  date: string;
  comment: string;
  user: User;
}

function CardBlogComment(props: CardBlogCommentProps) {
  return (
    <MainDiv>
      <UserDiv>
        <UserImage src={props.user.image_link} alt='imagem do usuario' />
        <UserName>{props.user.name}</UserName>
      </UserDiv>
      <CommentDiv>
        <p>{props.date}</p>
        <Comment>{props.comment}</Comment>
      </CommentDiv>
    </MainDiv>
  );
}
export default CardBlogComment;
