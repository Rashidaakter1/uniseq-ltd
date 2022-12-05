import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = (data)=> {console.log(data)
      reset()

      const currentUser = {email: user?.email,
        displayName:user?.displayName,
        education:data?.education,
        location:data?.location,
        phone:data?.phone
       };
      fetch(`https://uniseq-computer-api.onrender.com/users/${user?.email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
               console.log('from profile ',data);
            })
    };
    return (
        <div>
            <h1>{user.email}</h1>
            <h1>{user.displayName}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder='Education' className='input input-bordered mb-3 ' {...register("education")} />
                <br />
                <input type='text' placeholder='Location' className='input input-bordered mb-3 ' {...register("location")} />
                <br />
                <input type='text' placeholder='Phone' className='input input-bordered mb-3 ' {...register("phone")} />
                <br />
                
                <input type="submit" className='btn btn-outline btn-sm' value='Update Your Profile' />
            </form>
        </div>
    );
};

export default MyProfile;