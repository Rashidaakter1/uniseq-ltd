import React from 'react';

const MyOrder = ({ order ,index , refetch}) => {
    const {_id, name,email,productName}=order

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
    return (
        <tbody>

            <tr>
                <th>{index+1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{productName}</td>
                <td><button class="btn btn-ghost" onClick={()=>handleDelete(_id)} >delete</button></td>
                <td><button class="btn btn-ghost" >pay</button></td>
            </tr>

        </tbody>
    );
};

export default MyOrder;