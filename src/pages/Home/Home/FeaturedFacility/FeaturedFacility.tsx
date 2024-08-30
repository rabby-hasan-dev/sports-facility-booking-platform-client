import CardComponent from "../../../../components/ui/Card";
import { useGetAllFacilityQuery } from "../../../../redux/features/facility/facilityApi";

const FeaturedFacility = () => {
    const { data: allFacility, isFetching } = useGetAllFacilityQuery(undefined);
    return (
        <>
            <div className=" my-5 space-y-8  ">
                <div className="space-y-3 max-w-7xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900">Popular Facilities</h2>
                    <p className="text-lg text-gray-600 ">Discover and book from our selection of top-rated facilities.</p>
                </div>

                <div className="max-w-7xl mx-auto  grid sm:gird-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   2xl:grid-cols-6  gap-4">
                    {
                        allFacility?.data?.map((item) =>
                            <CardComponent loading={isFetching} key={item._id} id={item._id} name={item.name} image={item.image} description={item.description} ></CardComponent>)
                    }
                </div>
            </div>

        </>
    );
};

export default FeaturedFacility;