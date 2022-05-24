import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyOrder = ({ order ,index , refetch}) => {
    const {_id, name,email,productName}=order
    const navigate = useNavigate()

    const handleDelete=(id)=>{
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DElETE'
            
        })
            .then(response => response.json())
            .then(data => {
               window.confirm('are you sure')
                console.log('Success:', data);
               
            })
          
      
    }
    const handlePayment=(id)=>{
        navigate('/dashboard/payment')
    }
    return (
        <tbody>

            <tr>
                <th>{index+1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{productName}</td>
                <td><button class="btn btn-ghost" onClick={()=>handleDelete(_id)} >delete</button></td>
                <td><button class="btn btn-ghost" onClick={()=>handlePayment(_id)} >pay</button></td>
            </tr>

        </tbody>
    );
};

export default MyOrder;