import { GetProps, Input } from "antd";
import { useAppDispatch } from "../../../redux/hooks";
import { setSearchTerm } from "../../../redux/features/facility/facilitySlice";
const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;




const FacilitySearch = () => {
    const dispatch=useAppDispatch();
    
    const handleSearch: SearchProps['onSearch'] = (value) =>{    
        dispatch(setSearchTerm(value))
       
    } 



    return (
        <div>
            <Search placeholder="input search text" allowClear onSearch={handleSearch} size="large" style={{ width: 200 }} />
        </div>


    );
};

export default FacilitySearch;