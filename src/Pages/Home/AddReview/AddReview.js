import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';


const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const reviewData = {
            
            name: user?.displayName,
            email: user?.email,
            description:data.description,
            ratings:data.ratings
        }
        console.log(reviewData);

        fetch(`http://localhost:5000/reviews/${user?.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
    
    
    };

    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} class=" w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Give Your Reviews here</span>
                </label>
                
                <textarea  {...register("description")} class="input input-bordered w-full max-w-xs" cols="30" rows="10"></textarea>

                <select {...register("ratings")} class="select select-bordered select-sm w-full max-w-xs">
                    <option disabled selected>Give your ratings</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" className='btn btn-secondary' />
            </form>
        </div>
    );
};

export default AddReview;