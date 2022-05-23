import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Part from './Part';

const Parts = () => {
    const { isLoading, error, data: parts } = useQuery('parts', () =>
        fetch('http://localhost:5000/parts').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='p-24'>
            <h1>Parts : {parts.length}</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-6'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>

        </div>
    );
};

export default Parts;