import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
        const partsData = {
            
            name: data?.name,
            img: data?.img,
            decription : data.decription ,
            phone: data.phone,
            minimumOrder: data.minimumOrder,
            Available: data.Available,
            price: data.price,
        }

        fetch('http://localhost:5000/parts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(partsData),
        })
            .then(response => response.json())
            .then(data => {
                toast.success('your product is been placed')
                console.log('Success:', data);
              
            })


    };
    return (
        <div>
            <h1 className='text-3xl font-bold mb-3'>Add A New Product Here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder='Name' className='input input-bordered mb-3 ' {...register("name")} />
                <br />
                <input type='file' placeholder='img' className='input input-bordered mb-3 ' {...register("img")} />
                <br />
                <input type='text' placeholder='Description' className='input input-bordered mb-3 ' {...register("description")} />
                <br />
                <input type='text' placeholder='MinimumOrder' className='input input-bordered mb-3 ' {...register("minimumOrder")} />
                <br />
                <input type='text' placeholder='Available' className='input input-bordered mb-3 ' {...register("available")} />
                <br />

                <input type='text' placeholder='Price' className='input input-bordered mb-3 ' {...register("price")} />
                <br />

                <input type="submit" className='btn btn-outline' value='Add New Product' />
            </form>
        </div>
    );
};

export default AddProduct;