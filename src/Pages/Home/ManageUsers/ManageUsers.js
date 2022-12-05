import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const ManageUsers = () => {


    const { isLoading, error, data: users, refetch } = useQuery('users', () =>
        fetch(`https://uniseq-computer-api.onrender.com/users`).then(res =>
            res.json()
        )


    )
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(users);
    return (
        <div>
            
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

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