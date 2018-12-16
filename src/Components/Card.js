import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  headerStyle: {
    fontWeight: 'bold',
  },
  ingredientFlex: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  overflow: {
    overflow: 'hidden',
    maxHeight: 100,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, key, title, category, description, img, date, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, measurement1, measurement2, measurement3, measurement4, measurement5, measurement6, measurement7, measurement8, measurement9, measurement10, measurement11, measurement12, measurement13, measurement14, measurement15} = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {title[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title= {title}
          subheader={date}
        />
        <CardMedia
          className={classes.media}
          image={img}
          title={category}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph className={classes.headerStyle}>Description:</Typography>
            <Typography paragraph>
              {description}
            </Typography>
            <Typography paragraph className={classes.headerStyle}>Ingredients:</Typography>
            <div className={classes.ingredientFlex}><Typography paragraph>{ingredient1 ? ingredient1 : ''}</Typography> <Typography> {measurement1 ? measurement1 : ''}</Typography></div>
            <div className={classes.ingredientFlex}><Typography paragraph>{ingredient2 ? ingredient2 : ''}</Typography> <Typography>{measurement2 ? measurement2 : ''}</Typography></div>
            <div className={classes.ingredientFlex}><Typography paragraph>{ingredient3 ? ingredient3 : ''}</Typography> <Typography> {measurement3 ? measurement3 : ''}</Typography></div>
            <div className={classes.ingredientFlex}><Typography paragraph>{ingredient4 ? ingredient4 : ''}</Typography> <Typography> {measurement4 ? measurement4 : ''}</Typography></div>
            <div className={classes.ingredientFlex}><Typography paragraph>{ingredient5 ? ingredient5 : ''}</Typography> <Typography> {measurement5 ? measurement5 : ''}</Typography></div>
            <div className={classes.ingredientFlex}><Typography paragraph>{ingredient6 ? ingredient6 : ''}</Typography> <Typography> {measurement6 ? measurement6 : ''}</Typography></div>
            <div className={classes.ingredientFlex}><Typography paragraph>{ingredient7 ? ingredient7 : ''}</Typography> <Typography> {measurement7 ? measurement7 : ''}</Typography></div>
            <div className={classes.ingredientFlex}><Typography paragraph>{ingredient8 ? ingredient8 : ''}</Typography> <Typography> {measurement8 ? measurement8 : ''}</Typography></div>
            <div className={classes.ingredientFlex}><Typography paragraph>{ingredient9 ? ingredient9 : ''}</Typography> <Typography> {measurement9 ? measurement9 : ''}</Typography></div>
            <div className={classes.ingredientFlex}><Typography paragraph>{ingredient10 ? ingredient10 : ''}</Typography> <Typography> {measurement10 ? measurement10 : ''}</Typography></div>
            <div className={classes.ingredientFlex}><Typography paragraph>{ingredient11 ? ingredient11 : ''}</Typography> <Typography> {measurement11 ? measurement11 : ''}</Typography></div>
            <div className={classes.ingredientFlex}><Typography paragraph>{ingredient12 ? ingredient12 : ''}</Typography> <Typography> {measurement12 ? measurement12 : ''}</Typography></div>
            <div className={classes.ingredientFlex}><Typography paragraph>{ingredient13 ? ingredient13 : ''}</Typography> <Typography> {measurement13 ? measurement13 : ''}</Typography></div>
            <div className={classes.ingredientFlex}><Typography paragraph>{ingredient14 ? ingredient14 : ''}</Typography> <Typography> {measurement14 ? measurement14 : ''}</Typography></div>
            <div className={classes.ingredientFlex}><Typography paragraph>{ingredient15 ? ingredient15 : ''}</Typography> <Typography> {measurement15 ? measurement15 : ''}</Typography></div>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);