import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name:'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addItem : (state, action) => {
            const newItemId = action.payload.id;
            const existedItem = state.cartItems.find(item => item.id === newItemId);
            if(existedItem){
                alert('Item is already in the cart!');
            }else{
                const result = action.payload;
                result.quantity = 1;
                state.cartItems.push(result);
            }
        },
        removeItem : (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        incrementItenCounter: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
                if(item.id == action.payload){
                    item.quantity++;
                }
                return item
            });
        },
        decrementItenCounter: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
                if(item.id == action.payload){
                    if(item.quantity > 1){
                        item.quantity--;
                    }
                }
                return item
            }).filter((item) => item.quantity !== 0);
        },
    },
});

export const DisplayCartProducts = state => state.cart.cartItems;

export const { addItem, removeItem, incrementItenCounter, decrementItenCounter } = productSlice.actions;
export default productSlice.reducer; 