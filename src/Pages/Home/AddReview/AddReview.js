import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';


const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const navigate=useNavigate()

    const onSubmit = data => {
        console.log(data)
        const reviewData = {
            
            name: user?.displayName,
            email: user?.email,
            description:data.description,
            ratings:data.ratings
        }
        console.log(reviewData);

        fetch(`https://obscure-waters-19361.herokuapp.com/reviews/${user?.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                toast.success('Thanks for your opinion')
                navigate('/')
            })
    
    
    };

    
    return (
        <div className='text-center'>
            <form onSubmit={handleSubmit(onSubmit)} className=" w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-bold text-2xl">Give Your Reviews here</span>
                </label>
                
                <textarea  {...register("description")} className="input input-bordered w-full max-w-xs mb-3" cols="30" rows="10"></textarea>

                <select {...register("ratings")} className="select select-bordered select-sm w-full max-w-xs mb-3">
                    <option disabled selected>Give your ratings</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" className='btn btn-primary mb-3 ' />
            </form>
        </div>
    );
};

export default AddReview;