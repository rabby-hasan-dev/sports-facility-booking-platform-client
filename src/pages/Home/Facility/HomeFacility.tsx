import { Button, Dropdown, GetProps, Input, MenuProps, Space } from "antd";
import Card from "../../../components/ui/Card";
import { useGetAllFacilityQuery } from "../../../redux/features/facility/facilityApi";
const { Search } = Input;
type SearchProps = GetProps<typeof Input.Search>;
const items: MenuProps['items'] = [

    {
        label: 'Default Price',
        key: '0',

        danger: true,
    },
    {
        label: 'Highest Price',
        key: '1',

    },
    {
        label: 'Lowest Price',
        key: '2',

    },


];

const handleMenuClick = (data) => {
    console.log(data)
}

const menuProps = {
    items,
    onClick: handleMenuClick,
};



const HomeFacility = () => {

    const { data: allFacility,isFetching } = useGetAllFacilityQuery(undefined);
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);


    return (
        <div className="space-y-10">
            <div className="flex justify-between  items-center ">
                <div>
                <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
                </div>
                <Dropdown menu={menuProps} trigger={['click']} >
                    <Button onClick={() => handleMenuClick}>
                        <Space>
                            Filters
                            {/* <DownOutlined /> */}
                        </Space>
                    </Button>
                </Dropdown>

            </div>


            <div className="grid sm:gird-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   2xl:grid-cols-6  gap-4">
                {
                    allFacility?.data?.map((item) => <Card loading={isFetching} key={item._id} id={item._id} name={item.name} image={item.image} pricePerHour={item.pricePerHour} ></Card>)
                }
            </div>

        </div>
    );
};

export default HomeFacility;