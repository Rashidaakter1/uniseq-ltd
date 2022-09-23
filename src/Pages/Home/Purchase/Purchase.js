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
    const [min, setMin] = useState(0)
    let valueError;

    const { isLoading, error, data: part } = useQuery('parts', () =>
        fetch(`https://obscure-waters-19361.herokuapp.com/parts/${id}`).then(res =>
            res.json()
        )


    )
    const onSubmit = data => {
        const quantity = parseInt(data.quantity);
        setMin(part?.minimumOrder)
        if (quantity < min) {
            console.log(quantity,min);
            valueError = <p> you have to not min</p>
        }
        console.log(quantity);
        const orderData = {
            productName: part?.name,
            name: user?.displayName,
            email: user?.email,
            address: data.address,
            phone: data.phone,
            minimumOrder: data.quantity,
            price: part?.price
        }

        fetch('https://obscure-waters-19361.herokuapp.com/orders', {
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
                // navigate('/dashboard/myorders')
            })

        console.log(data, orderData)
    };





    console.log(part, user)



    // const min = part?.minimumOrder;
    // const max = part?.available;



    // const [value, setValue] = useState(min);

    const handleChange = event => {
        //     const findValue = parseInt(event.target.value);
        //    console.log(findValue);
        //    if(min <= findValue && findValue <= max){
        //     setValue(findValue)
        //    }
        //    if (min>findValue) {
        //     valueError=<p>
        //         your quantity have to rise
        //     </p>

        //    } else {

        //    }
        // const value = Math.max(min, Math.min(max, Number(event.target.value)));
        // setValue(value);
    };

    // console.log(value);
    // console.log(typeof value);

    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div className=' mx-5'>

            <div className="">
                <div className='mb-10 '>
                    <div className=''>
                        <figure><img className='' src={part.img} alt="" /></figure>
                    </div>
                    <div className="">
                        <div className="card-body card lg:w-3/4 sm:w-44 bg-base-100 ">
                            <h2 className="card-title">
                                <span className='font-bold text-xl text-lime-900'>
                                    Product Name :
                                </span>{part.name}</h2>
                            <p ><span className='font-bold text-lg text-lime-900'>
                                Description : </span> {part.description}</p>
                            <p ><span className='font-bold text-lg text-lime-900'>
                                Minimum Order : </span> {part.minimumOrder}</p>
                            <p ><span className='font-bold text-lg text-lime-900'>
                                Available : </span> {part.available}</p>
                            <p ><span className='font-bold text-lg text-lime-900'>
                                Price : </span> {part.price}</p>


                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="Name"> Name :
                                    <input className="input input-bordered w-full max-w-xs mb-3" type='text' value={user?.displayName} disabled title='Name' />
                                </label>
                                <br />
                                <label htmlFor="Email">Email :

                                    <input className="input input-bordered w-full max-w-xs mb-3" type='email' value={user?.email} disabled /></label>
                                <br />
                                <input {...register("address")} type="text" placeholder="Type Your Address " className="input input-bordered w-full max-w-xs mb-3" />
                                <br />
                                <input {...register("phone")} type="text" placeholder="Type contact number " className="input input-bordered w-full max-w-xs mb-3" />
                                <br />
                                <input {...register("quantity")}

                                    type="number" placeholder="Type Quantity number" onChange={handleChange} className="input input-bordered w-full max-w-xs mb-3" />

                                <p> erorr  {valueError}</p>
                                {/* {
                                (value >= min && value <= max) ? <p>yes </p> : <p> no</p>
                            } */}

                                <br />


                                <div className="card-actions justify-end">
                                    <input
                                        type="submit" className="btn btn-primary" value='Order' />
                                </div>


                            </form>





                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;