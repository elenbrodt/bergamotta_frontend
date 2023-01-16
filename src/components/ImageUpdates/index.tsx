import { useUser } from "../../store/modules/user";
import { byIdUser } from "../../services/MainApi/user_profile";
import { useEffect, useState } from "react";
import { ImgDiv, UserImg } from "./style";

/* interface User {
    image_link: string;
} */

export default function ImageUser(props: string) {
  /*     const userData = useUser()
    const userId = userData.findUser.id
    
    const [user, setUser] = useState<User>() */

  /*     useEffect(() => {
        const getData = async () => {
          try {
            const response = await byIdUser(userId);
            setUser (response.data)
          } catch (error) {
            alert("Deu algo errado no catch");
          }
        };
        getData();
      }, [setUser, userId]); */
  return (
    <ImgDiv>
      <UserImg src={props} alt='imagem do usuário' />
    </ImgDiv>
  );
}
