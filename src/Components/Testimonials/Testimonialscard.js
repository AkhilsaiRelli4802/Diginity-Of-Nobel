import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonialscard = ({ imageUrl, name, designation, content }) => {
  return (
    <div className="testimonialscard">
        <div className='testimonialscard-details'>
            <div>
      <img src={imageUrl} alt={name} className="testimonialscard-image" />
      </div>
      <div>
      <h4><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><br /><span>{name} <br /> {designation}</span></h4>
        
      </div>
      </div>
      <div className="testimonialscard-content">
      <p>{content}</p>
      </div>
    </div>
  );
}

export default Testimonialscard;