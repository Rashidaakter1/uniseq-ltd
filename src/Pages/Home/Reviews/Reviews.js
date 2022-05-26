import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Review from './Review';

const Reviews = () => {
    const { isLoading, error, data: reviews } = useQuery('reviews', () =>
        fetch(`https://obscure-waters-19361.herokuapp.com/reviews`).then(res =>
            res.json()
        )


    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-24 mb-8'>What Our Customers Say !!!</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4'>{
                reviews.map(review=><Review 
                key={review._id}
                review={review}
                ></Review>)
            }</div>
        </div>
    );
};

export default Reviews;