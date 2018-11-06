import React, {Component} from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import * as burgerBuilderActions from '../../store/actions/index';

class BurgerBuilder extends Component {

    state = {
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(ingKey => {
                return ingredients[ingKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }

    render () {
        const disabledInfo = {
            ...this.props.ingts
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;


        let burger = this.state.error ? <p>Ingredients can't be loaded.</p> : <Spinner />;
        if (this.props.ingts){
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ingts}/>
                </Aux>                
            );
            orderSummary = <OrderSummary 
                totalPrice={this.props.ttlPrice}
                ingredients={this.props.ingts}
                purchaseContinued={this.purchaseContinueHandler}
                purchaseCanceled={this.purchaseCancelHandler}/>;
        }
        if(this.state.loading){
            orderSummary = <Spinner />;
        };
        return (
            <Aux>
                <Modal 
                    show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal >
                {burger}
                <BuildControls 
                    price={this.props.ttlPrice}
                    ingredientAdded={this.props.onAddIngredient}
                    ingredientRemoved={this.props.onDeleteIngredient}
                    disabled={disabledInfo}
                    ordered={this.purchaseHandler}
                    purchaseable={this.updatePurchaseState(this.props.ingts)}/>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingts: state.ingredients,
        ttlPrice: state.totalPrice
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onDeleteIngredient: (ingName) => dispatch(burgerBuilderActions.deleteIngredient(ingName)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));