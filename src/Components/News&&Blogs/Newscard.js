import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faCalendar, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Newscard = ({ imageUrl, title }) => {
  return (
    <div className="newscard">
      <img src={imageUrl} alt={title} className="newscard-image" />
      <div className="newscard-content">
      <ol>
          <li><FontAwesomeIcon icon={faPerson} /><span>By admin</span></li>
          <li><FontAwesomeIcon icon={faCalendar} /><span>Date</span></li>
        </ol>
        <h2 className="newscard-title">{title}</h2>
        <button className="read-more-button">Read More<FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
    </div>
  );
}

export default Newscard;