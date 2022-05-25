import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, description, img, available, minimumOrder,price } = part


    return (
        <div className='grid  lg: grid-cols-3 '>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p> {description}</p>
                    <p>Min-Order : {minimumOrder}</p>
                    <p>Available : {available}</p>
                    <p>Price : {price}</p>

                    <div className="card-actions justify-end">
                        <Link to={`/purchase/${_id}`} className="btn btn-primary">Buy Now</Link >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;