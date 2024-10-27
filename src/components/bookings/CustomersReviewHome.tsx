import CustomerReviews from "./CustomerReviews";

export interface IReview {
    name: string;
    rating: number;
    comment: string;
    avatar: string;
}

const reviews: IReview[] = [
    {
        name: 'John Doe',
        rating: 4.5,
        comment: 'Great service! Highly recommended.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        name: 'Jane Smith',
        rating: 5,
        comment: 'Amazing experience, will definitely come back!',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    // Add more reviews as needed
];

const CustomerReviewsHome = () => (
    <CustomerReviews
        averageRating={4.5}
        reviewCount={reviews.length}
        reviews={reviews}
    />
);

export default CustomerReviewsHome;

