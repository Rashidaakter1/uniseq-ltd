import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" className="w-full"/> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img alt='' src="https://www.cgdirector.com/wp-content/uploads/media/2019/01/Parts_Needed_to_Build_a_PC_Twitter-1200x675.jpg" className="w-full"/> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img alt='' src="https://media.istockphoto.com/photos/3d-rendering-of-futuristic-blue-circuit-board-picture-id1129032734?k=20&m=1129032734&s=612x612&w=0&h=ThTmVjLwGhjEoPbLuCYVFsDE8RFXJ_ElpTQVY8vAe1g=" className="w-full"/> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img alt='' src="https://whatsabyte.com/wp-content/uploads/pc-components-2.jpg" className="w-full"/> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
            </div>
        </div>
    );
};

export default Banner;