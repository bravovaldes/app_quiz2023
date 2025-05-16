import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importez le style du carrousel
import { useNavigate } from 'react-router-dom'

const carouselOptions = {
  // Vous pouvez ajuster la largeur selon vos besoins, par exemple, '80%' ou '500px'.
  height: '150px', // Ajustez la hauteur selon vos besoins.
  showArrows: true,
  showStatus: false,
  showIndicators: true,
  infiniteLoop: true,
  autoPlay: true,
  interval: 3000,
  stopOnHover: true,
  transitionTime: 500,
};
export default function Pagination({data}) {
  const handleItemClick = (itemId) => {
    // Ici, vous pouvez définir la logique de redirection en fonction de l'élément sélectionné
    if(itemId===3){
    history('/question/5');
    }
    else{
      history(`/question/${itemId}`);
    }
    
  };
  const history = useNavigate();
 
    return (
      <Carousel {...carouselOptions}>
      {data.map((item, index) => {
        const isTroisiemeElement = index === 2;
        const itemClassName = isTroisiemeElement ? 'troisieme-element' : '';
    
        return (
          <div key={item.id} onClick={() => handleItemClick(item.id)} className={itemClassName}>
            <img className={`${item.nom}`} src={item.photo} alt={`Slide ${item.id}`} />
            <h2>{item.text}</h2>
            <p className='voir'>{item.description}</p>
          </div>
        );
      })}
    </Carousel>
    
      );
}

