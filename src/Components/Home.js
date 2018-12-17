import React, { Component } from "react";
import Card from "./Card";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const styles = theme => ({
  center: {
    paddingTop: 20,
    justifyContent: "center"
  }
});
class Home extends Component {
  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(res => res.json())
      .then(data => this.setState({ data }));
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then(res => res.json())
      .then(data => this.setState({ categories: data.drinks }));
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  getData = e => {
    e.preventDefault();
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
        this.state.searchTerm
      }`
    )
      .then(res => res.json())
      .then(data => this.setState({ data }));
  };
  getRandom = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  };

  getCats = e => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
        e.target.value
      }`
    )
      .then(res => res.json())
      .then(data => this.setState({ data }));
  };

  render() {
    const { classes, state } = this.props;

    return (
      <Grid container spacing={24} className={classes.center}>
        {!state.data.drinks ? (
          <h1 className="no-data">
            Go home, you're drunk. We can't serve you.
          </h1>
        ) : (
          state.data.drinks.map(drink => (
            <Grid key={drink.idDrink} item xs={12} sm={6} md={3}>
              <Card
                key={drink.idDrink}
                title={drink.strDrink}
                category={drink.strCategory}
                description={drink.strInstructions}
                img={drink.strDrinkThumb}
                date={drink.dateModified}
                ingredient1={drink.strIngredient1}
                ingredient2={drink.strIngredient2}
                ingredient3={drink.strIngredient3}
                ingredient4={drink.strIngredient4}
                ingredient5={drink.strIngredient5}
                ingredient6={drink.strIngredient6}
                ingredient7={drink.strIngredient7}
                ingredient8={drink.strIngredient8}
                ingredient9={drink.strIngredient9}
                ingredient10={drink.strIngredient10}
                ingredient11={drink.strIngredient11}
                ingredient12={drink.strIngredient12}
                ingredient13={drink.strIngredient13}
                ingredient14={drink.strIngredient14}
                ingredient15={drink.strIngredient15}
                measurement1={drink.strMeasure1}
                measurement2={drink.strMeasure2}
                measurement3={drink.strMeasure3}
                measurement4={drink.strMeasure4}
                measurement5={drink.strMeasure5}
                measurement6={drink.strMeasure6}
                measurement7={drink.strMeasure7}
                measurement8={drink.strMeasure8}
                measurement9={drink.strMeasure9}
                measurement10={drink.strMeasure10}
                measurement11={drink.strMeasure11}
                measurement12={drink.strMeasure12}
                measurement13={drink.strMeasure13}
                measurement14={drink.strMeasure14}
                measurement15={drink.strMeasure15}
              />
            </Grid>
          ))
        )}
      </Grid>
    );
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);