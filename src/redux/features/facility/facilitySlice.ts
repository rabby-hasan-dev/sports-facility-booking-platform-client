import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store";




const initialState = {
    searchTerm: '',
    priceRange: {priceRange:[0, 1000]},
    pageSize:10,
    currentPage:1,

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

        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;

        }

    }
})




export const { setSearchTerm, setPriceRange, setCurrentPage } = facilitySlice.actions;


export default facilitySlice.reducer;

export const useSearchTerm = (state: RootState) => state.facility.searchTerm;
export const usePriceRange = (state: RootState) => state.facility.priceRange;
export const useCurrentPage = (state: RootState) => state.facility.currentPage;
export const usePageSize = (state: RootState) => state.facility.pageSize;