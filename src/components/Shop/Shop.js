import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
    const { products, addToCart } = props

    return (
        <div>
            <h1>This is shop</h1>
            <div className="d-flex ">
                {
                    products.map(pd => <Product
                        key={pd.id}
                        product={pd}
                        addToCart={addToCart}
                    />)
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps =  {
        addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// connectToStore(Shop)

export default connect(mapStateToProps, mapDispatchToProps)(Shop);