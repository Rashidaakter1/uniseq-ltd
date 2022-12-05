import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';



const stripePromise = loadStripe('pk_test_51L1ZumKizsa19VzlnRN9aaAgrum4FfCBAfft3h3ZCs3FAgEXgCcv8joPpfzlIjssDEOGpMCSUrHZjPCBmNd2EkjM00mdVlelcS');

const Payment = () => {
    const { id } = useParams()
    const url = `https://uniseq-computer-api.onrender.com/orders/${id}`;

    const { data: order, isLoading } = useQuery(['orders', id], () => fetch(url).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <div class="card w-96 bg-base-100 shadow-xl mb-16">
                <div class="card-body">
                    <h2 class="card-title font-bold uppercase">Dear {order?.name},</h2>
                    <p>Your Order is Placed for ,<span className='text-green-900 font-bold'> {order?.productName}</span></p>
                    <p>Quantity : {order?.minimumOrder}</p>
                    <p>Price : {order?.price}</p>


                    
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;