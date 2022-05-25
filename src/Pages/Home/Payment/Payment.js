import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';



const stripePromise = loadStripe('pk_test_51L1ZumKizsa19VzlnRN9aaAgrum4FfCBAfft3h3ZCs3FAgEXgCcv8joPpfzlIjssDEOGpMCSUrHZjPCBmNd2EkjM00mdVlelcS');

const Payment = () => {
    const {id}=useParams()
    const url = `http://localhost:5000/orders/${id}`;

    const { data: order, isLoading } = useQuery(['orders', id], () => fetch(url).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            
            <h1>payment {order?.name}</h1>

            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;