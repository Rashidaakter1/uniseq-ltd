import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div data-theme='fantasy'>

            <div class="drawer drawer-mobile">
                <input id="dashboardBar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-4xl text-center font-bold mb-10 mt-8'>Welcome To Dashboard</h1>
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="dashboardBar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content mt-24">
                        {/* <!-- Sidebar content here --> */}

                        {!admin &&
                            <>
                                <li><Link to='/dashboard'>My Orders</Link></li>

                                <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                            </>}
                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                        {admin && <>
                            <li><Link to='/dashboard/manageusers'>Make Admin</Link></li>
                            <li><Link to='/dashboard/addproduct'>Add New Product</Link></li>
                            <li><Link to='/dashboard/manageproduct'>Manage Products</Link></li>
                            <li><Link to='/dashboard/manageorder'>Manage Order</Link></li>
                        </>}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;