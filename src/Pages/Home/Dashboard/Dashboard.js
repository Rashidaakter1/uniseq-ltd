import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>welcome to dashboard</h1>
            <div class="drawer drawer-mobile">
                <input id="dashboardBar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    dashboard
                    <Outlet></Outlet>
                   
                </div>
                <div class="drawer-side">
                    <label for="dashboardBar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                       
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        
                        <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;