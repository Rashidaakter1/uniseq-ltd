import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import DeletePart from './DeletePart';
import Products from './Products';

const ManageProducts = () => {
    const [deletingParts, setDeletingParts] = useState(null);
    const { isLoading, error, data: parts, refetch } = useQuery('parts', () =>
        fetch('https://obscure-waters-19361.herokuapp.com/parts').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(parts);
    return (
        <div>
            <h1>ManageProducts : {parts.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>

                        </tr>
                    </thead>
                    {
                        parts.map((part, index) => <Products
                            key={part._id}
                            part={part}
                            index={index}
                            refetch={refetch}
                            setDeletingParts={setDeletingParts}
                        ></Products>)
                    }

                    {deletingParts && <DeletePart
                        deletingParts={deletingParts}
                        refetch={refetch}
                        setDeletingParts={setDeletingParts}
                    ></DeletePart>}


                </table>

            </div>
        </div>
    );
};

export default ManageProducts;