import React from 'react';

const Business = () => {
    return (
        <div className='text-center mt-4'>
            <h1 className="text-5xl font-bold text-center mt-16 mb-16">Millon  Business Trust Us </h1>
            <div class="stats stats-vertical lg:stats-horizontal shadow mt-8 bg-amber-100">

                <div class="stat">
                    <div class="stat-title">Sold Products</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-title">Happy Clients</div>
                    <div class="stat-value">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title">Feedbacks</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Business;