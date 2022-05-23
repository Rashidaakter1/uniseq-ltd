import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password)

        const userData = {
            name: data?.displayName,
            email: data?.email,
            
        }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
    
            console.log(userData)
        
    };

    let errorMessage;
    if (error || gError) {
        errorMessage =
            <div>
                <p>Error: {error.message}</p>
            </div>

    }
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (user || gUser) {
        navigate('/home')
    }
    return (
        <div className='h-screen' data-theme='cupcake'>
            <h2 className="text-2xl text-primary">Register</h2>
            <div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-secondary">
                    <form class="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" class="input input-bordered"
                                {...register("name", {
                                    required: true

                                })}
                            />
                            <p className='text-red-500'>
                                {errors.name?.type === 'required' && "name is required"}


                            </p>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" class="input input-bordered"
                                {...register("email", {
                                    required: true,
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'error message'
                                    }
                                })}
                            />
                            <p className='text-red-500'>
                                {errors.email?.type === 'required' && "email is required"}
                                {errors.email?.type === 'pattern' && "email must be valid"}

                            </p>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" class="input input-bordered"
                                {...register("password", {
                                    required: true,
                                    minLength: {
                                        value: 8,
                                        message: 'error message'
                                    }
                                })} />

                            <p className='text-red-500'>
                                {errors.password?.type === 'required' && "password is required"}
                                {errors.password?.type === 'minLength' && "password must be 8 characters"}

                            </p>

                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <input type="submit" class="btn btn-primary" value='Register' />
                            <button onClick={() => signInWithGoogle()} className='btn btn-primary mt-4' >
                                <div className='flex flex-row items-center'>

                                    <img style={{ height: '35px' }} src="https://i.ibb.co/ZTdGcNf/google-logo.webp" alt="" />

                                    <div><span className=''>Continue With Google</span></div>
                                </div>
                            </button>
                            <p className='text-red-500 text-xs'>{errorMessage}</p>
                        </div>
                        <div>
                            <p>Already have an account? <Link to='/login' >Login </Link></p>
                        </div>
                    </form>


                </div>

            </div>
        </div>
    );
};

export default Register;