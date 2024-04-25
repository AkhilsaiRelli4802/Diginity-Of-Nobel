import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './VolunteerCard.css'; 

const VolunteerCard = () => {
  return (
    <div className='CardsContainer'>
        <div>
        <Link to="/volunteerteam1" className='cardLink'>
        <Card className="Volunteercard"> 
            <CardContent className='cardContent'>
            <Typography gutterBottom variant="h5" component="div">
             Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Description
            </Typography>
            </CardContent>
         </Card>
        </Link>
        </div>

        <div>
        <Link to="/volunteerteam2" className='cardLink'>
        <Card className="Volunteercard"> 
            <CardContent className='cardContent'>
            <Typography gutterBottom variant="h5" component="div">
            Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Description
            </Typography>
            </CardContent>
         </Card>
        </Link>
        </div>

        <div>
        <Link to="/volunteerteam2" className='cardLink'>
        <Card className="Volunteercard"> 
            <CardContent className='cardContent'>
            <Typography gutterBottom variant="h5" component="div">
                Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Description
            </Typography>
            </CardContent>
         </Card>
        </Link>
        </div>
        
    </div>
  );
};

export default VolunteerCard;
