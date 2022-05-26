import React from 'react';

const MyPortfolio = () => {
    return (
        <div className=' bg-purple-100 mb-4 ' data-theme='fantasy'>
            <h1 className='mb-4 text-3xl text-center font-bold text-purple-900 p-3'> MY PORTFOLIO</h1>
            <div class="card  text-purple-900">
                <div class="card-body">
                    <h2 class="card-title">NAME : RASHIDA AKTER</h2>
                    <p>E-MAIL : rashidaakterchadni@gmail.com</p>
                    <div>EDUCATION :
                        <p>University : Bangladesh university </p>
                        <p>SUbject : Applied Mathematics</p>
                        <p>School:Birshreshtha Munshi Abdur Rouf Public College
                        </p>
                        <p>Group : Science </p>

                        <p>School:Birshreshtha Noor Mohammad Public College
                        </p>


                        <p>Group : Science </p>
                    </div>


                    <p>SKILLS : I have learnt Client Side Scripting / Coding -
                        <li> 
                            HTML (HyperText Markup Language)
                        </li>
                        <li>CSS (Cascading Style Sheets)</li>
                        <li> JavaScript</li>
                        <li>Tailwind css</li>
                        <li>Bootstrap</li>
                        <li>React js</li>
                        <li>React Hooks From</li>
                        <p>Server Side Scripting / Coding </p>
                        <li>node js</li>
                    </p>
                    <p>Three of my projects:
                    </p>
                     <a className="link link-secondary" href="https://rida-training-fitness.web.app/">Rida Training and Fitness</a>

                     <a className="link link-secondary" href="https://nextbike-204d0.web.app/">NextBike</a>

                     <a className="link link-secondary" href="https://bookstore-rashida1.netlify.app/">Bookstore</a>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;