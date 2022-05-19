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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



export default function Home() {
  const classes = useStyles();
  const [hotel, setHotel] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/hms/hotel")
      .then((response) => response.json())
      .then((responseData) => {
        setHotel(responseData);
      });
    console.log(hotel);
  }, []);
  return (
    
    <Grid container direction='row' alignItems='center'>
    {hotel.map((hotel) => {
              return (
        <Grid item xs={4} justifyContent='center'>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {hotel.hotelName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <h1> {hotel.description}</h1>
           <h1> {hotel.address}</h1>
           <h1> {hotel.telephone}</h1>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        );
          })}
    </Grid>

    
    
  );
}
