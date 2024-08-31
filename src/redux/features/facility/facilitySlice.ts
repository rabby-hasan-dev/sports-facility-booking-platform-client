import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store";




const initialState = {
    searchTerm: '',
    priceRange: {priceRange:[0, 1000]},

}



const facilitySlice = createSlice({
    name: 'facility',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;

        },
        setPriceRange: (state, action) => {
            state.priceRange = action.payload;

        }

    }
})




export const { setSearchTerm, setPriceRange } = facilitySlice.actions;

export default facilitySlice.reducer;



export const useSearchTerm = (state: RootState) => state.facility.searchTerm;
export const usePriceRange = (state: RootState) => state.facility.priceRange