import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/Actions/cartActions';

const Cart = (props) => {
    const { cart, removeFromCart } = props;
    return (
        <div>
            <h3>This Is Cart</h3>
            <ul>
                {
                    cart.map(pd => <li  key={pd.cartId}> {pd.name} <button className="m-2 btn btn-danger"
                        onClick={() => removeFromCart(pd.cartId)}
                    >x</button></li>)
                }
            </ul>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}
const mapDispatchToProps = {

    removeFromCart: removeFromCart

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);