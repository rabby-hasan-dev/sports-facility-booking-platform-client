import { Card, List } from 'antd';

const RecentActivity = () => {
  const data = [
    "User John Doe placed an order.",
    "Product 'Plant A' was updated.",
    "User Jane Smith signed up.",
    // Do  More activities using dynamic api data

  ];

  return (
    <Card className="bg-white shadow mb-6" title="Recent Activity">
      <List
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <p>{item}</p>
          </List.Item>
        )}
      />
    </Card>
  );
};


export default RecentActivity;