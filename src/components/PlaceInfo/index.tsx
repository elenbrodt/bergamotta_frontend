/* import { useEffect, useRef, useState } from "react";
import { byIdPlace } from "../../services/MainApi/restaurant";
import { useUser } from "../../store/modules/user";
import { Column, Container } from "./styles";

function PlaceInfo({ props: string }) {
  const urlId = props;
  const dataFetchRef = useRef(false);
  const [place, setPlace] = useState<Place>();
  const [socials, setSocials] = useState<string>();

  const at = socials?.split("/")[3];
  const [value, setValue] = useState<number>(1); //rating stars
  const [price, setPrice] = useState<number>(1);

  const [goods, setGoods] = useState<string[]>([]);

  const user = useUser();

  useEffect(() => {
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    const getData = async () => {
      try {
        const response = await byIdPlace(id);
        setPlace(response.data);
        setSocials(response.data.social_media);
        if (response.data.average_ticket_price < 50) {
          setPrice(1);
        }
        if (
          50 >= response.data.average_ticket_price ||
          response.data.average_ticket_price <= 89
        ) {
          setPrice(2);
        } else if (response.data.average_ticket_price > 90) {
          setPrice(3);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getData();
    const getAverage = async () => {
      try {
        const response = await averageById(urlId);
        setValue(response.data);
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getAverage();
    const getRatingWelcoming = async () => {
      try {
        const response = await welcomingServiceById(urlId);
        if (response.data === "good") {
          setGoods((goods) => [...goods, "Atendimento Acolhedor"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getRatingWelcoming();
    const getIngredientSubstitution = async () => {
      try {
        const response = await ingredientSubstitutionById(urlId);
        if (response.data === "good") {
          setGoods((goods) => [...goods, "Alteração de ingredientes"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getIngredientSubstitution();
    const getInstagrammableFoodById = async () => {
      try {
        const response = await instagrammableFoodById(urlId);
        if (response.data === "good") {
          setGoods((goods) => [...goods, "Instagramável"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getInstagrammableFoodById();
    const getTastyFoodById = async () => {
      try {
        const response = await tastyFoodById(urlId);
        if (response.data === "good") {
          setGoods((goods) => [...goods, "Saboroso"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getTastyFoodById();
    const getCozyById = async () => {
      try {
        const response = await cozyById(urlId);
        if (response.data === "good") {
          setGoods((goods) => [...goods, "Aconchegante"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getCozyById();
    const getServiceSpeed = async () => {
      try {
        const response = await serviceSpeed(urlId);
        if (response.data === "good") {
          setGoods((goods) => [...goods, "Rápido atendimento"]);
        }
      } catch (error) {
        alert("Deu algo errado no catch");
      }
    };
    getServiceSpeed();
    if (user.isLogged) {
      const getFavorites = async () => {
        try {
          const response = await userFavoriteById(user.findUser.id, urlId);
        } catch (error) {
          alert("Deu algo errado no catch");
        }
      };
      getFavorites();
    }
  }, [setPlace, urlId, user]);
  return (
    <Column>
      <div>
        <img src={place?.image_link} alt='Imagem restaurante' />
        <div>
          <Title>{place?.name}</Title>
        </div>
      </div>
      <Container>
        <Box>
          <Container>
            <AccessTimeFilledIcon />
            {place?.opening_hours}
          </Container>
          <Rating id='stars' value={value} precision={0.5} readOnly />
          <Container>
            <InstagramIcon />
            {at}
          </Container>
        </Box>
        <Box>
          <div className='favorite_box'>
            <Checkbox
              defaultChecked
              disabled
              icon={<FavoriteBorder color='error' />}
              checkedIcon={<Favorite color='error' />}
            />
          </div>
          <StyledRating
            value={price}
            readOnly
            max={3}
            className='favorite_box'
            icon={<AttachMoneyIcon fontSize='inherit' />}
            emptyIcon={<AttachMoneyIcon fontSize='inherit' />}
          />
          <Container className='favorite_box'>
            <PhoneIcon />
            {place?.phone}
          </Container>
        </Box>
      </Container>
      <Box>
        <GoodsTags>
          {goods.map((good, index) => (
            <p key={index}>{good}</p>
          ))}
        </GoodsTags>
      </Box>
      <Box>
        <h2>Últimas avaliações</h2>
        <CardRating
          id='0000000'
          name='Jane Doe'
          image_link='https://s2.static.brasilescola.uol.com.br/be/2020/12/peixe.jpg'
        />
      </Box>
    </Column>
  );
}

export default PlaceInfo;
 */
export {};
