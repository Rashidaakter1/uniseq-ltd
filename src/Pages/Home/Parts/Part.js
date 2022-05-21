import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, description, img, available, minimumOrder,price } = part
    return (
        <div className='grid  lg: grid-cols-3 '>
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p> {description}</p>
                    <p>Min-Order : {minimumOrder}</p>
                    <p>Available : {available}</p>
                    <p>Price : {price}</p>

                    <div class="card-actions justify-end">
                        <Link to='/purchase' class="btn btn-primary">Buy Now</Link >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;