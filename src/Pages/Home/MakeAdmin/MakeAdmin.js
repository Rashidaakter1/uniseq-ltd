import React from 'react';
import { toast } from 'react-toastify';

const MakeAdmin = ({ user, refetch, index }) => {
    const { displayName, email, role } = user

    const makeAdmin = () => {

        fetch(`https://obscure-waters-19361.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })

    }
    return (

        <tbody>

            <tr>
                <th>{index + 1}</th>
                <td>{displayName}</td>
                <td>{email}</td>
                <td>{role !== 'admin' && <button className="btn btn-ghost" onClick={makeAdmin} >Make admin</button>}</td>
            </tr>

        </tbody>

    );
};

export default MakeAdmin;