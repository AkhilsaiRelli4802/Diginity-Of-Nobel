import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faCalendar } from '@fortawesome/free-solid-svg-icons';
function Card({ title, image }) {
  return (
    <div className="newscard">
        <div className='newsimage-container'>
         {image && <img src={image}  className="newscard-image" />}
         </div>
         
         <ol>
          <li><FontAwesomeIcon icon={faPerson} /><span>By admin</span></li>
          <li><FontAwesomeIcon icon={faCalendar} /><span>Date</span></li>
        </ol>
        
       
      <h2 className="newscard-title">{title}</h2>
      
      
      <button>ReadMore</button>
    
    </div>
  );
}

export default Card;