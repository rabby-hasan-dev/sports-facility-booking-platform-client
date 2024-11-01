
import { useGetAllFacilityQuery } from "../../../redux/features/facility/facilityApi";
import FSearch from "./FacilitySearch";
import FFiliter from "./FacilityFilters";
import FacilityList from "./FacilityList";
import HeadingComponent from "../../../components/ui/HeadingComponent";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentPage, usePageSize, usePriceRange, useSearchTerm } from "../../../redux/features/facility/facilitySlice";
import FacilityPagination from "./FacilityPagination";
import { useEffect, useMemo, useState } from "react";
import { IFacilities } from "../../../types/faicility.type";
import Container from "../../../components/ui/Container";



const HomeFacility = () => {
    const searchTerm = useAppSelector(useSearchTerm);
    const filters = useAppSelector(usePriceRange);
    const currentPage = useAppSelector(useCurrentPage);
    const pageSize = useAppSelector(usePageSize);
    const { data: allFacility, isFetching } = useGetAllFacilityQuery(undefined);
    const [paginatedFacilities, setPaginatedFacilities] = useState([]);

    const filteredFacilities = useMemo(() => {

        return allFacility?.data?.filter((facility: IFacilities) =>
            facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            facility.location.toLowerCase().includes(searchTerm.toLowerCase())
        )
            .filter((facility: IFacilities) =>
                facility.pricePerHour >= filters.priceRange[0] && facility.pricePerHour <= filters.priceRange[1]
            ) || [];


    }, [allFacility, searchTerm, filters])



    useEffect(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const currentFacilities = filteredFacilities?.slice(startIndex, endIndex);
        setPaginatedFacilities(currentFacilities);
    }, [filteredFacilities, currentPage, pageSize])





    return (
        <Container>

            <div className="space-y-8  mx-[50px] ">
                <HeadingComponent
                    heading={'Entire Facilities'}
                    subHeading={'Discover and book from our selection of entire facilities.'}
                ></HeadingComponent>

                <div className="flex justify-between items-center">
                    <FSearch ></FSearch>
                    <FFiliter ></FFiliter>
                </div>

                <FacilityList filteredFacilities={paginatedFacilities} isFetching={isFetching} ></FacilityList>
                <FacilityPagination filteredFacilities={filteredFacilities}  ></FacilityPagination>

            </div>
        </Container>
    );
};

export default HomeFacility;