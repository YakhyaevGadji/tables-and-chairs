import { createSlice } from "@reduxjs/toolkit";

type TypePrice = [number, number];

interface IFilterSlice {
    price: TypePrice;
}

const initialState: IFilterSlice = {
    price: [0, 20000]
}

const filters = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setPrice: (state, action) => {
            state.price = action.payload;
        }
    }
});


export const { setPrice } = filters.actions
export default filters.reducer