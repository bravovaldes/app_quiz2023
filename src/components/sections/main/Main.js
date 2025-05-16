import React from 'react'
import '../../../style/pagination/pagination.scss'
import '../../../style/pagination/Populaires.scss'
import Pagination from './Pagination'
import image from '../../../assests/img/bg_allquiz.jpg'
import Geographie from '../../../assests/img/geography.jpg'
import Foot from '../../../assests/img/footstart.jpg'
import Aside from './Aside'
import Populaires from './Populaires'
const carouselData = [
    {
      id: 1,
      photo: `${Geographie}`,
    
    },
    {
        id: 2,
      photo: `${image}`,
      text: 'Musique',
      description: 'Voir Tous les Quiz Musique',
        
    },
    {
        id: 3,
        photo: `${Foot}`,
       
    },
  ];
export default function Main() {
  return (
    <main>
        <div className='pagination'>
              <Pagination data={carouselData}/>
              <Aside/> 
        </div>
        <>
        <Populaires/>
        </>
    </main>
  )
}
