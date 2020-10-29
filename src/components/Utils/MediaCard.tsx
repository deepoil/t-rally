import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            marginTop: theme.spacing(4),
            marginLeft: theme.spacing(5)
        },
        media: {
            height: 140
        },
    })
);

export default function MediaCard(props: any) {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
          <CardActionArea to={props.to} component={Link}>
              <CardMedia
                  className={classes.media}
                  image={props.cardMedia.image}
                  title={props.cardMedia.title}
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      {props.contents.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                      {props.contents.body}
                  </Typography>
              </CardContent>
          </CardActionArea>
      </Card>
    );
}