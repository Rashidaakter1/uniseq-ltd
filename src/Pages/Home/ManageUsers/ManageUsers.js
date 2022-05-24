import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const ManageUsers = () => {


    const { isLoading, error, data: users, refetch } = useQuery('users', () =>
        fetch(`http://localhost:5000/users`).then(res =>
            res.json()
        )


    )
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(users);
    return (
        <div>
            <h1 className=''>ManageUsers : {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        users.map((user, index) => <MakeAdmin
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                        ></MakeAdmin>)
                    }


                </table>
                
            </div>
        </div>
    );
};

export default ManageUsers;