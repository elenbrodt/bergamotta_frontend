import React from 'react';
import './style.css';
import Imagem from "../../assets/imageRestaurantLocked/image 1 (1).png"
import Persona from "../../assets/imageRestaurantLocked/persona 7 1.png"
import Fav from "../../assets/imageRestaurantLocked/Fav.png"
import Icon from "../../assets/imageRestaurantLocked/Icon 24x24.png"
import Vector from "../../assets/imageRestaurantLocked/Vector (3).png"
import Phone from "../../assets/imageRestaurantLocked/Phone-filled.png"
import Header from "../../components/Header"
import Rating from "../../components/Rating"

function RestaurantLocked() {

  return (
    <div >
    <Header />
    <main>
      <div className='conteudo-main'>
      <section className='section-primary'>
        <img className='imagem-restaurante' src={Imagem} alt="imagem do restaurante" />
        <div className='style-rest-primary'>
        <h1>Restaurante da Maria</h1>
        <button><img src={Fav} alt="favoritar" /></button>
        </div>
        <span><img src={Icon} alt="" />  Aberto até às 22h</span>
        <div>
        <button>Avaliação por estrelas</button>
        <button>Avaliação por preço</button>
        </div>
        <span><img className='span-insta' src={Vector} alt="" />@restaurantea</span>
        <span><img className='span-phone' src={Phone} alt="" />(99) 9999-9999</span>
        <h2>O que mais curtem no local</h2>
        <div className='validacoes'>
        <p className='paragrafh-primary'>Atendimento acolhedor</p>
        <p className='paragrafh-secondary'>Instagramável</p>
        </div>
        <div className='validacoes'>
        <p  className='paragrafh-primary'>Alteração de ingredientes</p>
        <p className='paragrafh-secondary'>Aconchegante</p>
        </div>
      </section>

      <section className='section-secondary'>
        <h2>Últimas avaliações</h2>
        <div className='persona'>
        <img src={Persona} alt="imagem da persona" />
        <span>John Doe</span>
        </div>
        <p>Várias opções de pratos que pareciam muito bons. Sem arrependimentos, a comida tava <br/>deliciosa!</p>
        <div className='box-avaliacoes'>
          <p>Crie sua conta e acesse mais avaliações</p>
          <a>VER MAIS<br/>AVALIAÇÕES</a>
        </div>
      </section>

      </div>
     </main>

    </div>
    
  );
}

export default RestaurantLocked;
