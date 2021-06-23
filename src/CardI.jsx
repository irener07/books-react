import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({foto}) {
  const classes = useStyles();

  return (
        <CardMedia
          className={classes.media}
          image='src/Images/ThingsFallApart.jpg'
          title="Contemplative Reptile"
        />
        
  );
}
