
import { useGetAllFacilityQuery } from "../../../redux/features/facility/facilityApi";
import FSearch from "./FacilitySearch";
import FFiliter from "./FacilityFilters";
import FacilityList from "./FacilityList";
import HeadingComponent from "../../../components/ui/HeadingComponent";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentPage, usePageSize, usePriceRange, useSearchTerm } from "../../../redux/features/facility/facilitySlice";
import FacilityPagination from "./FacilityPagination";
import { useEffect, useMemo, useState } from "react";



const HomeFacility = () => {
    const searchTerm = useAppSelector(useSearchTerm);
    const filters = useAppSelector(usePriceRange);
    const currentPage = useAppSelector(useCurrentPage);
    const pageSize = useAppSelector(usePageSize);
    const { data: allFacility, isFetching } = useGetAllFacilityQuery(undefined);
    const [paginatedFacilities, setPaginatedFacilities] = useState([]);

    const filteredFacilities = useMemo(() => {

        return allFacility?.data?.filter((facility: any) =>
            facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            facility.location.toLowerCase().includes(searchTerm.toLowerCase())
        )
            .filter((facility: any) =>
                facility.pricePerHour >= filters.priceRange[0] && facility.pricePerHour <= filters.priceRange[1]
            ) || [];


    }, [allFacility,searchTerm,filters])



    useEffect(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const currentFacilities = filteredFacilities?.slice(startIndex, endIndex);
        setPaginatedFacilities(currentFacilities);
    }, [filteredFacilities, currentPage, pageSize])





    return (
        <div className="space-y-8 ">
            <HeadingComponent
                heading={'Entire Facilities'}
                subHeading={'Discover and book from our selection of entire facilities.'}
            ></HeadingComponent>

            <div className="max-w-7xl mx-auto  flex justify-between items-center">
                <FSearch ></FSearch>
                <FFiliter ></FFiliter>
            </div>

            <FacilityList filteredFacilities={paginatedFacilities} isFetching={isFetching} ></FacilityList>
            <FacilityPagination></FacilityPagination>

        </div>
    );
};

export default HomeFacility;