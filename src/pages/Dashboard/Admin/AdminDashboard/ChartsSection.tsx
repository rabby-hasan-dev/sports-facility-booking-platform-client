import { Card, Row, Col } from 'antd';
// Import your chart components here

const ChartsSection = () => {



    return (
        <Row gutter={16} className="mb-6">
            <Col span={12}>
                <Card className="bg-white shadow" title="Sales Overview">
                    {/* Do: Insert Sales Overview Chart */}
                </Card>
            </Col>
            <Col span={12}>
                <Card className="bg-white shadow" title="User Growth">
                    {/*Do: Insert User Growth Chart */}
                </Card>
            </Col>
        </Row>
    );
}


export default ChartsSection;