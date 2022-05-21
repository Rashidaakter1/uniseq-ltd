import React from 'react';

const Login = () => {
    return (
        <div className='h-screen' data-theme='cupcake'>
            <h2 className="text-2xl text-primary">LogIn</h2>
            <div>


                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-secondary">
                    <form action="" class="card-body">

                        
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                       
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;