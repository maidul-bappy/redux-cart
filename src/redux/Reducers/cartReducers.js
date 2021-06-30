import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/cartActions";

const initialState = {
    cart: [],
    products: [
        { name: 'Lenovo Laptop', id: 1 },
        { name: 'Hp Laptop', id: 2 },
        { name: 'Asus Laptop', id: 3 },
        { name: 'Acer Laptop', id: 4 },
        { name: 'Dell Laptop', id: 5 },
        { name: 'Msi Laptop', id: 6 }
    ]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // return {
            //     cart: [...state.cart, action.id]
            // }
            const newItem = {
                productId: action.id, 
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return {products: 
                state.products, 
                cart: newCart,
            }

        case REMOVE_FROM_CART:
            const id = action.id
            const remainingCart = state.cart.filter(item => item.cartId !== id );
            return {products: state.products, cart: remainingCart}
        
        default:
            return state;
    }
}

export default cartReducers;