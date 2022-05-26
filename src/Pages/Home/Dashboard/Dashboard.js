import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div data-theme='fantasy'>

            <div className="drawer drawer-mobile">
                <input id="dashboardBar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-red-100 px-10 py-10">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-4xl text-center font-bold mb-10 mt-4'>Welcome To Dashboard</h1>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side ">
                    <label for="dashboardBar" className="drawer-overlay "></label>
                    <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content mt-24">
                        {/* <!-- Sidebar content here --> */}

                        <li><NavLink to='/dashboard'>My Profile</NavLink></li>
                        {!admin &&
                            <>
                                <li><NavLink to='/dashboard/myorders'>My Orders</NavLink></li>

                                <li><NavLink to='/dashboard/addreview'>Add Review</NavLink></li>
                            </>}
                        
                        {admin && <>
                            <li><NavLink to='/dashboard/manageusers'>Make Admin</NavLink></li>
                            <li><NavLink to='/dashboard/addproduct'>Add New Product</NavLink></li>
                            <li><NavLink to='/dashboard/manageproduct'>Manage Products</NavLink></li>
                            <li><NavLink to='/dashboard/manageorder'>Manage Order</NavLink></li>
                        </>}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;