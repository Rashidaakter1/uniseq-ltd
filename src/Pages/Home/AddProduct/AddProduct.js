import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit ,reset} = useForm();
    const imageKey = '74e5c723ad8c8f24be7ea70a54d7e813';
    const onSubmit = data => {

        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())

            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const partsData = {

                        name: data?.name,
                        img: img,
                        decription: data.decription,
                        phone: data.phone,
                        minimumOrder: data.minimumOrder,
                        available: data.available,
                        price: data.price,
                    }
                    fetch('https://obscure-waters-19361.herokuapp.com/parts', {
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
                            reset()
                        })
                }


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