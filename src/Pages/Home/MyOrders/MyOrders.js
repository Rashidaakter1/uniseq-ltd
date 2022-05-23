import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);

    const { isLoading, error, data: orders ,refetch} = useQuery('orders', () =>
        fetch(`http://localhost:5000/orders/?email=${user?.email}`).then(res =>
            res.json()
        )
        

    )
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(orders);
    


    return (
        <div>
            <h1>order {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Materials</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        orders.map((order,index)=><MyOrder 
                        key={order._id}
                        order={order}
                        index={index}
                        refetch={refetch}
                        ></MyOrder>)
                    }
                    
                    
                </table>
            </div>
        </div>
    );
};

export default MyOrders;