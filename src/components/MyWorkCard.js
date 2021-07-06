import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.svg';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: '15px',
  },
}));


export default function MyWorkCard() {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="logo"
            // height="140"
            image={logo}
            title="logo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              My Work
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Some description of this work that will intrigue the visitor to click and view more.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}
