import React, {Component} from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';



class BurgerIngredient extends Component {
    render () {
        let ingrediennt = null;

    switch ( this.props.type ) {
        case ('bread-bottom'):
            ingrediennt = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingrediennt = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingrediennt = <div className={classes.Meat}></div>
            break;
        case ('cheese'):
            ingrediennt = <div className={classes.Cheese}></div>
            break;
        case ('salad'):
            ingrediennt = <div className={classes.Salad}></div>
            break;
        case ('bacon'):
            ingrediennt = <div className={classes.Bacon}></div>
            break;         
        default:
            ingrediennt = null;         

    }

    return ingrediennt;
    }
} 

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};



export default BurgerIngredient;