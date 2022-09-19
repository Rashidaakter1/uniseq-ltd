import React from 'react';

const Products = ({part, refetch, index,setDeletingParts }) => {
  const {name,price}=part
    return (
        <tbody>

            <tr>
                <th>{index + 1}</th>
                
                <td>{name}</td>
                <td>{price}</td>
                <td>
                {<label onClick={() => setDeletingParts(part)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>}
                </td>
                
            </tr>

        </tbody>
    );
};

export default Products;