
import { useGetAllFacilityQuery } from "../../../redux/features/facility/facilityApi";
import FSearch from "./FacilitySearch";
import FPagination from "./FacilityPagination";
import FFiliter from "./FacilityFilters";
import FacilityList from "./FacilityList";
import HeadingComponent from "../../../components/ui/HeadingComponent";
import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { usePriceRange, useSearchTerm } from "../../../redux/features/facility/facilitySlice";


const facilitiesData = [
    { id: 1, name: 'Facility A', location: 'Location X', price: 200, category: 'sports' },
    { id: 2, name: 'Facility B', location: 'Location Y', price: 350, category: 'conference' },

];



const HomeFacility = () => {
    const  searchTerm=useAppSelector(useSearchTerm);
    const  filters=useAppSelector(usePriceRange);
    const { data: allFacility, isFetching } = useGetAllFacilityQuery(undefined);
 
    const filteredFacilities = allFacility?.data?.filter((facility:any) =>
            facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            facility.location.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((facility:any) =>
            facility.pricePerHour >= filters.priceRange[0] && facility.pricePerHour <= filters.priceRange[1]
        );
        


   

    return (
        <div className="space-y-8">
            <HeadingComponent
                heading={'Entire Facilities'}
                subHeading={'Discover and book from our selection of entire facilities.'}
            ></HeadingComponent>

            <div className="flex justify-between items-center">
                <FSearch ></FSearch>
                <FFiliter ></FFiliter>
            </div>

            <FacilityList filteredFacilities={filteredFacilities} isFetching={isFetching} ></FacilityList>
            <FPagination></FPagination>

        </div>
    );
};

export default HomeFacility;