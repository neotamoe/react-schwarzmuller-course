import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log('this.props.ingredients in orderhandler ',this.props.ingredients);  // passed due to using render instead of component in <Route>
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, 
            customer: {
                name: 'Neota Moe',
                address: {
                    street: '123 test street',
                    zipCode: '55406',
                    country: 'USA'
                },
                email: 'neota@test.com',
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order) //node_name.json is format for firebase
        .then(response => {
            this.setState({loading: false});
            this.props.history.push('/');
        })
        .catch(error => {
            this.setState({loading: false});
        });  
    }

    render() {
        let form = (
            <form>
                <Input inputtype="input" type="text" name="name" placeholder="name"/>
                <Input inputtype="input" type="text" name="email" placeholder="email" />
                <Input inputtype="input" type="text" name="street" placeholder="street" />
                <Input inputtype="input" type="text" name="postalCode" placeholder="postal code" />                
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }

}

export default ContactData;