import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import DeleteModal from './DeleteModal';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [deletingOrder, setDeletingOrder] = useState(null);

    const { isLoading, error, data: orders, refetch } = useQuery('orders', () =>
        fetch(`https://obscure-waters-19361.herokuapp.com/orders/?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())


    )
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(orders);



    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Materials</th>
                            <th>Manage Orders</th>
                            <th>Payment</th>

                        </tr>
                    </thead>


                    {
                        orders.map((order, index) => <MyOrder
                            key={order._id}
                            order={order}
                            index={index}
                            refetch={refetch}
                            setDeletingOrder={setDeletingOrder}
                        ></MyOrder>)
                    }
                    {deletingOrder && <DeleteModal
                        deletingOrder={deletingOrder}
                        refetch={refetch}
                        setDeletingOrder={setDeletingOrder}
                    ></DeleteModal>}


                </table>
            </div>
        </div>
    );
};

export default MyOrders;