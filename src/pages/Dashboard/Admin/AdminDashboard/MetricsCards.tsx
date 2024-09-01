
import { Card, Row, Col } from 'antd';

const MetricsCards = () => {


    return(
    <Row gutter={16}  className="mb-6">
        <Col span={6} xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Card className="bg-blue-500 text-white" bordered={false}>
                <p className="text-xl">Total Sales</p>
                <p className="text-3xl font-bold">$15,000</p>
            </Card>
        </Col>
        <Col   span={6} xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Card className="bg-green-500 text-white" bordered={false}>
                <p className="text-xl">New Users</p>
                <p className="text-3xl font-bold">150</p>
            </Card>
        </Col>
        <Col span={6} xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Card className="bg-yellow-500 text-white" bordered={false}>
                <p className="text-xl">Orders Pending</p>
                <p className="text-3xl font-bold">20</p>
            </Card>
        </Col>
        <Col span={6} xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Card className="bg-red-500 text-white" bordered={false}>
                <p className="text-xl">Issues</p>
                <p className="text-3xl font-bold">5</p>
            </Card>
        </Col>
    </Row>
    )


}

export default MetricsCards;