import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';


const Login = () => {
    const navigate=useNavigate()
    
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [token]=useToken(user || gUser )


    const { register, formState: { errors }, handleSubmit } = useForm();
   
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data)
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
      if (token) {
        navigate(from, { replace: true });
      }


    return (
        <div className='h-screen sm:h-full' data-theme='fantasy'>
            <h2 className="text-4xl text-primary font-bold text-center p-6 mb-10">LogIn</h2>
            <div className='flex justify-center items-center'>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-purple-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
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

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value='Login' />
                            <button onClick={() => signInWithGoogle()} className='btn btn-primary mt-4' >
                                <div className='flex flex-row items-center'>

                                    <img style={{ height: '35px' }} src="https://i.ibb.co/ZTdGcNf/google-logo.webp" alt="" />

                                    <div><span className=''>Continue With Google</span></div>
                                </div>
                            </button>

                            <p className='text-red-500 text-xs'>{errorMessage}</p>

                        </div>
                        <div>
                            <p>New to Compo? <Link to='/register' >Register </Link></p>
                        </div>
                    </form>


                </div>

            </div>
        </div>
    );
};

export default Login;