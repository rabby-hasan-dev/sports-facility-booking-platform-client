import { Spin } from "antd";
import Card from "../../../components/ui/Card";
import { IFacilities } from "../../../types/faicility.type";


type TFacilityProps = {
    filteredFacilities: IFacilities[];
    isFetching: boolean;
}

const FacilityList = ({ filteredFacilities, isFetching }: TFacilityProps) => {


    return (
        <div  className=" max-w-7xl mx-auto justify-around  grid sm:gird-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  2xl:grid-cols-5 gap-8  ">

            {
                isFetching ? <Spin size="large" /> : null
            }

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