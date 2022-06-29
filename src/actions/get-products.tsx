import { ActionTypes } from "../constant/actions";
// #region Section :- Document

// To fetch all product  data 
export const action_fetchProductList = () => ({
    type: ActionTypes.GET_PRODUCTS.GET_PRODUCTS_FETCH_DATA
});


// to fetch the product based on category 
export const action_fetchProductByCategory = (payload: any) => ({
    payload,
    type: ActionTypes.GET_PRODUCTS.GET_PRODUCT_BY_CATEGORY_DATA
});

// to fetch the single product  
export const action_fetchSingleProduct = (payload: any) => ({
    payload,
    type: ActionTypes.GET_PRODUCTS.GET_SINGLE_PRODUCT_DATA
});

debugger
// to sorting product price  
export const action_sortProductPrice = (payload: any) => ({
    payload,
    type: ActionTypes.GET_PRODUCTS.SORT_PRODUCT_PRICE
});