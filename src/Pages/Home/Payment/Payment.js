// import React from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// import { useQuery } from 'react-query';
// import { useParams } from 'react-router-dom';

// import CheckoutForm from '../CheckoutForm/CheckoutForm';
// import Loading from '../../Shared/Loading/Loading';


// const stripePromise = loadStripe('pk_test_51L1ZumKizsa19VzlnRN9aaAgrum4FfCBAfft3h3ZCs3FAgEXgCcv8joPpfzlIjssDEOGpMCSUrHZjPCBmNd2EkjM00mdVlelcS');

// const Payment = () => {
//     const { id } = useParams();
//     const url = `http://localhost:5000/orders/${id}`;

//     const { data: order, isLoading } = useQuery(['orders', id], () => fetch(url, {
//         method: 'GET',
        
//     }).then(res => res.json()));

//     if (isLoading) {
//         return <Loading></Loading>
//     }
//     return (
//         <div>
//             <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
//                 <div class="card-body">
//                     <p className="text-success font-bold">Hello, {order.name}</p>
//                     {/* <h2 class="card-title">Please Pay for {order.treatment}</h2>
//                     <p>Your Appointment: <span className='text-orange-700'>{order.date}</span> at {order.slot}</p>
//                     <p>Please pay: ${order.price}</p> */}
//                 </div>
//             </div>
//             <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
//                 <div class="card-body">
//                     <Elements stripe={stripePromise}>
//                         <CheckoutForm order={order} />
//                     </Elements>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Payment;