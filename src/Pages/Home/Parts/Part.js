import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, description, img, available, minimumOrder, price } = part


    return (
        <div className=''>
            <div class="card md:w-52 lg:w-96 h-full bg-slate-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="parts" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
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