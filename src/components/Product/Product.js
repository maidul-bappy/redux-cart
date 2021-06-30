import React from 'react';

const Product = (props) => {
    const { addToCart, product } = props;
    return (
        <div className=" rounded bg-warning m-2 border border-dark p-3" >
            <h5>{product.name}</h5>
            <button
                className="btn btn-dark mt-3"
                onClick={() => addToCart(product.id, product.name)}>Add to cart</button>
        </div>
    );
};

export default Product;