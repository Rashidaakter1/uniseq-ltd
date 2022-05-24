import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
                       
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        
                        <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                        <li><Link to='/dashboard/manageusers'>Make Admin</Link></li>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;