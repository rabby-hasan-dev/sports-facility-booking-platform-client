import { Slider } from "antd";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setPriceRange, usePriceRange } from "../../../redux/features/facility/facilitySlice";




const FacilityFilters = () => {
    const dispatch = useAppDispatch();
    const { priceRange } = useAppSelector(usePriceRange);

    const handlePriceChange = (value: number | number[]) => {
        dispatch(setPriceRange({ priceRange: value }))

    };



    return (
        <div>
            <Slider
                range
                min={0}
                max={1000}
                step={10}
                defaultValue={[0, 1000]}
                onChange={handlePriceChange}
                style={{ width: '100%' }}


            />
            <div className="flex justify-between items-center gap-4">
                <p className="py-2 px-4 border-2 text-center text-lg" >{priceRange[0]} </p>
                <p className="py-2 px-4  border-2 text-center text-lg "  >{priceRange[1]} </p>
            </div>

        </div>
    );
};

export default FacilityFilters;