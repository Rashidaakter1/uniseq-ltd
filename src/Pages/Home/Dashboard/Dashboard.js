import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1>welcome to dashboard</h1>
            <div class="drawer drawer-mobile">
                <input id="dashboardBar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    

                </div>
                <div class="drawer-side">
                    <label for="dashboardBar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;