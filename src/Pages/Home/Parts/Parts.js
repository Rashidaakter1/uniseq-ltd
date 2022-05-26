import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Part from './Part';

const Parts = () => {
    const { isLoading, error, data: parts } = useQuery('parts', () =>
        fetch('https://obscure-waters-19361.herokuapp.com/parts').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='p-16'>
            <h1 className='text-5xl font-bold text-center mt-24 mb-16'>Materials That We Provide </h1>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-6'>
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