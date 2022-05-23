import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const Reviews = () => {
    const { isLoading, error, data: reviews } = useQuery('reviews', () =>
        fetch(`http://localhost:5000/reviews`).then(res =>
            res.json()
        )


    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>Reviews : {reviews.length}</h1>
            {
                reviews.map(review=><div>
                    <h1>{review.name}</h1>
                    <h1>{review.email}</h1>
                    <h1>{review.description}</h1>
                    <h1>{review.ratings}</h1>
                </div>)
            }
        </div>
    );
};

export default Reviews;