import React from 'react';

const Review = ({ review }) => {
    const { name, email, description, ratings } = review
    return (
        <div className='m-4' >

            <div className="card bg-sky-100 shadow-xl">
                <div className="card-body">
                <h2 className="card-title text-3xl text-cyan-900">{review.name}</h2>
                    <p className='font-bold text-cyan-900'>{review.description}</p>
                    <p  className='font-bold text-cyan-900'>Ratings : {review.ratings}</p>
                    
                </div>
            </div>
            {/* <div className="card  lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                <div className="card-body">

                    
                    

                </div>
            </div> */}
        </div>
    );
};

export default Review;