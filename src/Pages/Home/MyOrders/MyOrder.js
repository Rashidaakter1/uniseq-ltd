import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({ order, index, refetch, setDeletingOrder }) => {
    const { _id, name, email, productName, price, transactionId } = order
   
    return (
        <tbody>

            <tr>
                <th>{index + 1}</th>
                <td className='uppercase'>{name}</td>
                <td>{email}</td>
                <td>{productName}</td>

                <td>{(order.paid)?
                    <button disabled className="btn btn-ghost" >delete</button>
                    :
                    <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                }</td>
                
                <td>{
                    (price && !order.paid) && <Link to={`/dashboard/payment/${_id}`} > <button className='btn btn-xs btn-info'> pay</button></Link>
                }
                    {
                        (price && order.paid) && <div>
                            <p><span className='text-green-900 font-bold'>Paid</span></p>
                            <p className='text-xs font-bold'>Transaction id: <span className='text-purple-900 font-bold'>{transactionId}</span></p>
                        </div>
                    }

                </td>
            </tr>

        </tbody>
    );
};

export default MyOrder;