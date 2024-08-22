export const initialState = {
    wishlist: [],
};
export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            let index = state.wishlist.findIndex(
                (item) => item.id === action.payload.id
            );
            if (index < 0) {
                return {
                    ...state,
                    wishlist: [...state.wishlist, action.payload],
                };
            } else {
                return {
                    ...state,
                    wishlist: state.wishlist.filter(
                        (item) => item.id !== action.payload.id
                    ),
                };
            }
        default:
            return state;
    }
};
