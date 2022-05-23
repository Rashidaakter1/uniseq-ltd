import React from 'react';

const MyOrder = ({ order ,index}) => {
    const { name,email}=order
    return (
        <tbody>

            <tr>
                <th>{index+1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>Blue</td>
            </tr>

        </tbody>
    );
};

export default MyOrder;