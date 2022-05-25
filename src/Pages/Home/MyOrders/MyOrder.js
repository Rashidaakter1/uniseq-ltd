import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MyOrder = ({ order, index, refetch }) => {
    const { _id, name, email, productName, price, transactionId } = order
    const navigate = useNavigate()

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DElETE'

        })
            .then(response => response.json())
            .then(data => {
                window.confirm('are you sure')
                console.log('Success:', data);

            })


    }
    console.log(order);

    return (
        <tbody>

            <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{productName}</td>
                <td>{(order.paid)?
                    <button disabled className="btn btn-ghost" onClick={() => handleDelete(_id)} >delete</button>
                    :
                    <button  className="btn btn-ghost" onClick={() => handleDelete(_id)} >delete</button>
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