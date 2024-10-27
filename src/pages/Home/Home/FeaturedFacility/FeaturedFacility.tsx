import { Spin } from "antd";
import CardComponent from "../../../../components/ui/Card";
import HeadingComponent from "../../../../components/ui/HeadingComponent";
import { useGetAllFacilityQuery } from "../../../../redux/features/facility/facilityApi";
import { IFacilities } from "../../../../types/faicility.type";
import { getPoplarFacilities } from "../../../../utils/popularFacilitySort";
import { useEffect, useMemo, useState } from "react";


const FeaturedFacility = () => {
    const { data: allFacility, isFetching } = useGetAllFacilityQuery(undefined);
    const [popularFacilities, setPopularFacilites] = useState<IFacilities[] | []>([]);

    const popularData = useMemo(() => {
        if (allFacility?.data) {
            return getPoplarFacilities(allFacility?.data);
        }
        return [];
    }, [allFacility?.data]);


    useEffect(() => {
        if (popularData.length > 0) {
            setPopularFacilites(popularData);
        }
    }, [popularData]);



    return (
        <>
            <div className=" py-12  space-y-8 bg-gray-100 ">
                <HeadingComponent heading="Popular Facilities" subHeading="Discover and book from our selection of top-rated facilities." />

                <div className="max-w-7xl mx-auto justify-evenly grid sm:gird-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   2xl:grid-cols-5  gap-8">

                    {
                        isFetching ? <Spin size="large" /> : null
                    }

                    {
                        popularFacilities?.map((item: IFacilities) =>
                            <CardComponent loading={isFetching} key={item._id} id={item._id} name={item.name} image={item.image} description={item.description} ></CardComponent>)
                    }
                </div>
            </div>

        </>
    );
};

export default FeaturedFacility;