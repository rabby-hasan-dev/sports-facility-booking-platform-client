import Card from "../../../components/ui/Card";
import { IFacilities } from "../../../types/faicility.type";


 type TFacilityProps={
    filteredFacilities:IFacilities[];
    isFetching:boolean;
 }

const FacilityList = ({filteredFacilities,isFetching}:TFacilityProps) => {

   
    return (
        <div className="grid sm:gird-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   2xl:grid-cols-6  gap-4">
            {
               filteredFacilities?.map((item: IFacilities) =>
                    <Card
                        key={item?._id}
                        id={item?._id}
                        loading={isFetching}
                        name={item?.name}
                        image={item?.image}
                        pricePerHour={item?.pricePerHour}
                    ></Card>)
            }
        </div>
    );
};

export default FacilityList;