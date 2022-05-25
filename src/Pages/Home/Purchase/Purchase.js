import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Purchase = () => {

    const navigate = useNavigate()

    const [user, loading] = useAuthState(auth);
    const { id } = useParams()
    const { register, handleSubmit } = useForm();

    const { isLoading, error, data: part } = useQuery('parts', () =>
        fetch(`http://localhost:5000/parts/${id}`).then(res =>
            res.json()
        )


    )
    const onSubmit = data => {
        const orderData = {
            productName :part?.name,
            name: user?.displayName,
            email: user?.email,
            address: data.address,
            phone: data.phone,
            minimumOrder: data.quantity
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        })
            .then(response => response.json())
            .then(data => {
                toast.success('your order is placed')
                console.log('Success:', data);
                navigate('/dashboard')
            })

        console.log(data,orderData)
    };





    console.log(part, user)

    const min = part?.minimumOrder;
    const max = part?.available;

    const [value, setValue] = useState(min);

    const handleChange = event => {
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setValue(value);
    };

    console.log(value);
    console.log(typeof value);

    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div>
            <h1>purchase {id}</h1>
            <h1>purchase </h1>
            <div className="card w-3/4 lg:card-side bg-base-100 shadow-xl">
                <figure><img src={part.img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{part.name}</h2>
                    <p>{part.description}</p>
                    <p>{part.minimumOrder}</p>
                    <p>{part.available}</p>
                    <p>{part.price}</p>


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input  className="input input-bordered w-full max-w-xs" type='text' value={user?.displayName} disabled />
                        <input  className="input input-bordered w-full max-w-xs" type='email' value={user?.email} disabled />
                        <input {...register("address")} type="text" placeholder="Type Your Address " className="input input-bordered w-full max-w-xs" />

                        <input {...register("phone")} type="text" placeholder="Type contact number " className="input input-bordered w-full max-w-xs" />
                        <input {...register("quantity")}

                            type="number" placeholder="Type Quantity number " value={value} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
                        {
                            (value >= min && value <= max) ? <p>yes </p> : <p> no</p>
                        }

                        <div className="card-actions justify-end">
                            <input
                                type="submit" className="btn btn-primary" value='Order' />
                        </div>

                    </form>





                </div>
            </div>
        </div>
    );
};

export default Purchase;