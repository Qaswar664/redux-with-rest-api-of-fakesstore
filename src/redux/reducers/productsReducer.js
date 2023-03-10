import { ActionTypes } from "../constants/Actions-Types";

// const intialState = {
//     products: [],
//   };

// export const productsReducer = (state = intialState, { type, payload }) => {
//     switch (type) {
//       case ActionTypes.SET_PRODUCTS:
//         return {
//             ...state, 
//             products: payload 
//         }
//       default:
//         return state;
//     }
//   };

//   export const selectedProductReducer=(state={},{type,payload})=>{
//     switch(type){
//       case ActionTypes.SELECTED_PRODUCT:
//         return{
//           ...state,...payload
//         }
//         case ActionTypes.REMOVE_SELECTED_PRODUCT:
//         return{
          
//         }
//         default:
//         return state;
//     }

//   }
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
      
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
