import React from 'react';
import { toast } from 'react-toastify';

const DeletePart = ({deletingParts, refetch, setDeletingParts}) => {
    const { name,_id} = deletingParts;
    const handleDelete = () => {
        
        fetch(`https://obscure-waters-19361.herokuapp.com/parts/${_id}`, {
            method: 'DELETE',
            
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product: ${name} is deleted.`)
                    setDeletingParts(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete  {name}!</h3>
                    <p class="py-4">If you want to delete click the button here </p>
                    <div class="modal-action">
                    <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
        </div>
    );
};

export default DeletePart;