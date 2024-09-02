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






export const selectFilteredFacilities = (state) => {
    const { searchTerm, priceRange, category, facilities } = state.facility;
  
    return facilities
      .filter((facility) =>
        facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        facility.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((facility) =>
        facility.price >= priceRange[0] && facility.price <= priceRange[1]
      )
      .filter((facility) => !category || facility.category === category);
  };
  
  export const selectPaginatedFacilities = (state) => {
    const { currentPage, pageSize } = state.facility;
    const filteredFacilities = selectFilteredFacilities(state);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredFacilities.slice(startIndex, endIndex);
  };
  
  export const selectTotalFacilitiesCount = (state) => {
    return selectFilteredFacilities(state).length;
  };



















export default facilitySlice.reducer;

export const useSearchTerm = (state: RootState) => state.facility.searchTerm;
export const usePriceRange = (state: RootState) => state.facility.priceRange;
export const useCurrentPage = (state: RootState) => state.facility.currentPage;
export const usePageSize = (state: RootState) => state.facility.pageSize;