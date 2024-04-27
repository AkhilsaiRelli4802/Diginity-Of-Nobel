import React from 'react'
import Newscard from './Newscard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import "./News&Blog.css"
const NewsAndBlogs = () => {
  return (
    <div className='newsblogs-container' style={{marginTop:"80px"}}>
      <h4><FontAwesomeIcon icon={faAngleDoubleLeft}/>NEWS && BLOGS<FontAwesomeIcon icon={faAngleDoubleRight}/></h4>
      <h1>Latest NEWS</h1>
      <div className='newscards-container'>
      
      <Newscard
        title="Surge of plastic surgeries"
        imageUrl="image2.jpg"
      />
      
      <Newscard
        title="Mix of mist and snow"
        imageUrl="image3.jpg"
      />
     
      
      <Newscard
        title="Wastage of childhood"
        imageUrl="image7.jpg"
    
      />
      <Newscard
        title="Global citizenship"
        imageUrl="image6.jpg"
        
      />
      
      </div>
      
    </div>
    
  )
}

export default NewsAndBlogs