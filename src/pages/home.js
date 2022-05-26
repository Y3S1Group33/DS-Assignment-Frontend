import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  maingrid: {
    marginLeft: '75px',
    marginBottom: '35px',
  },
  grid: {
    marginBottom: '35px',

  }

});



export default function Home() {
  const classes = useStyles();
  const [hotel, setHotel] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/hms/hotel")
      .then((response) => response.json())
      .then((responseData) => {
        setHotel(responseData);
      });
    console.log(hotel);
  }, []);
  return (
    <div >
    <Grid container direction='row' className={classes.maingrid} >
    {hotel.map((hotel) => {
      return (
        <Grid item xs={4} justifyContent='center' className={classes.grid}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="./images/1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {hotel.hotelName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <h3> {hotel.description}</h3>
           <h3> {hotel.address}</h3>
           <h3> {hotel.telephone}</h3>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
                  <Link to={`/reservations/${hotel.id}`} className="btn btn-primary">View Details
                            </Link>
      
      </CardActions>
    </Card>
        </Grid>
        );
    })}
    </Grid>
    
    </div>
  );
}
