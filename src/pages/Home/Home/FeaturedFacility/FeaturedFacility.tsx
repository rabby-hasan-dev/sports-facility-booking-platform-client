import { Spin } from "antd";
import CardComponent from "../../../../components/ui/Card";
import HeadingComponent from "../../../../components/ui/HeadingComponent";
import { useGetAllFacilityQuery } from "../../../../redux/features/facility/facilityApi";
import { IFacilities } from "../../../../types/faicility.type";
import { getPoplarFacilities } from "../../../../utils/popularFacilitySort";
import { useEffect, useMemo, useState } from "react";
import Container from "../../../../components/ui/Container";


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
        <Container>
            <div className=" container  mx-[50px]  space-y-8 ">
                <HeadingComponent heading="Popular Facilities" subHeading="Discover and book from our selection of top-rated facilities." />

                <div className="grid sm:gird-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">

                    {
                        isFetching ? <Spin size="large" /> : null
                    }

                    {
                        popularFacilities?.map((item: IFacilities) =>
                            <div key={item._id} className="w-full md:w-1/2 lg:w-1/3 mb-8">

                                <CardComponent loading={isFetching} key={item._id} id={item._id} name={item.name} image={item.image} description={item.description} ></CardComponent>
                            </div>
                        )
                    }
                </div>
            </div>

        </Container>
    );
};

export default FeaturedFacility;