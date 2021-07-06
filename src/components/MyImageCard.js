import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import sample_banner from '../sample_banner.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: '0px',
  },
}));


export default function MyImageCard() {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardMedia
            component="img"
            alt="logo"
            image={sample_banner}
            title="sample_banner"
        />
      </Card>
  );
}
