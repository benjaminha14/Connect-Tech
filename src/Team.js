import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './style/Team.css';
import Ben from './Images/Ben.png';
import Patrick from './Images/Patrick.png';
import Raul from './Images/Raul.jpeg';
import Chris from './Images/Chris.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

function Team() {
  const classes = useStyles();
  return (
    <div className="Teams">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Ben}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Ben Ha
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Hello, my name is Ben and I'm a junior CS major and Econ minor. I
              have experience in front end (HTML/CSS/JS) and a bit of React. I'd
              love to learn more React. I am a passionate and hard worker. I
              have a lot of experience with product development. I have built
              several products in the past and am currently working on a very
              exciting web 3D product as well. I would be interested in working
              on something in regards to finance or the environment. Follow my
              web 3D project on IG: @spaces3.0 !
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className="header" size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Patrick}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Patrick Jayoma
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Hello, my name is Patrick Jayoma and I am a transfer student
              majoring in Computer Science. I am a reliable team member. I have
              some experience working with JS, ReactJS, NodeJS, and PHP. I
              normally prefer working on backend development, however I am
              looking forward to learning about user interface and experience.
              <br />
              <br />
              <br />
              <br />
              <br />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className="header" size="small" color="primary">
            Share
          </Button>
          <Button className="header" size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Raul}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Raul Rodriguez
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Hey everyone! My name is Raul Rodriguez, I am a junior and a
              computer science major with a minor in psychology. I am proficient
              in JavaScript, Java, HTML and CSS. I also have experience with C
              and Ajax. I would like to dedicate this project more towards my
              back end skills but I am willing to work either. Reach out to me
              at my email if interested in working together:
              rrodri80@lion.lmu.edu I look forward to getting to talk to all of
              you at some point in the semester. Also good luck to everyone with
              their classes!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className="header" size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Chris}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Chris Carmona
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              I would say my strengths as a team member are having experience
              with python, some java script, and a strong math background. I'm
              also willing to work whenever necessary to get the job done well
              and on time.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className="header" size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Team;
