import { ActionTypes } from "../constant/actions";

const initialState = {
    getProductList: [],
    singleProductDetail: {},

};

export const getProductListReducer = (state: any = initialState, action: any) => {

    switch (action.type) {

        // get product list 
        case ActionTypes.GET_PRODUCTS.GET_PRODUCTS_FETCH_DATA_SUCCESS:
            return {
                ...state,
                getProductList: action.payload
            };

        // get the product based on category
        case ActionTypes.GET_PRODUCTS.GET_PRODUCT_BY_CATEGORY_DATA_SUCCESS:
            return {
                ...state,
                getProductList: action.payload
            };


        // get the single product details
        case ActionTypes.GET_PRODUCTS.GET_SINGLE_PRODUCT_DATA_SUCCESS:
            return {
                ...state,
                singleProductDetail: action.payload
            };

        // get the product list  based on price sorting
        case ActionTypes.GET_PRODUCTS.SORT_PRODUCT_PRICE_SUCCESS:
            return {
                ...state,
                getProductList: action.payload
            };

        default:
            return state;
    }
};


