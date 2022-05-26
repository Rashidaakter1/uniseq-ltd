import React from 'react';

const Review = ({ review }) => {
    const { name, email, description, ratings } = review
    return (
        <div className='m-4' >

            <div className="card h-full bg-sky-100 shadow-xl">
                <div className="card-body">
                <h2 className="card-title text-3xl text-cyan-900 uppercase">Name :{review.name}</h2>
                    <p className='font-bold text-cyan-900'> {review.description}</p>
                    <p  className='font-bold text-cyan-900'>Ratings : {review.ratings}</p>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Review;