
import { Rate, List, Avatar, Typography, Divider } from 'antd';

const { Title, Text } = Typography;



const CustomerReviews = ({ averageRating, reviewCount, reviews }) => {
    return (
        <div className="customer-reviews">
            {/* Overall Rating Section */}
            <div className="overall-rating" style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Title level={3}>Customer Reviews</Title>
                <Rate allowHalf disabled defaultValue={averageRating} />
                <Text style={{ display: 'block', fontSize: '18px', color: '#888' }}>
                    {averageRating} / 5.0 ({reviewCount} reviews)
                </Text>
            </div>

            <Divider />

            {/* Individual Reviews List */}
            <List
                itemLayout="horizontal"
                dataSource={reviews}
                renderItem={(review) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={review.avatar} />}
                            title={
                                <>
                                    <Text strong>{review.name}</Text>
                                    <Rate allowHalf disabled defaultValue={review.rating} style={{ marginLeft: '10px' }} />
                                </>
                            }
                            description={<Text>{review.comment}</Text>}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default CustomerReviews;
