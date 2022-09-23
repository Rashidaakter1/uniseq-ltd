import React from "react";

const MyPortfolio = () => {
  return (
    <div className="my-12 ">
      <h1 className="flex justify-center lg:text-4xl md:text-3xl text-3xl font-semibold mx-auto my-8">
        {" "}
        MY PORTFOLIO
      </h1>
      <div class="mx-6 my-10">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://placeimg.com/260/400/arch"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="mx-auto">
              <h1 className="text-5xl font-bold"> RASHIDA AKTER</h1>

              <p>E-MAIL : rashidaakterchadni@gmail.com</p>

              <div>
                EDUCATION :<p>University : Bangladesh university </p>
                <p>SUbject : Applied Mathematics</p>
                <p>School:Birshreshtha Munshi Abdur Rouf Public College</p>
                <p>Group : Science </p>
                <p>School:Birshreshtha Noor Mohammad Public College</p>
                <p>Group : Science </p>
              </div>

             
            </div>
          </div>
        </div>
        <div class="card-body">
          <h2 class="card-title"></h2>
          <p>E-MAIL : rashidaakterchadni@gmail.com</p>

          <p>
            SKILLS : I have learnt Client Side Scripting / Coding -
            <li>HTML (HyperText Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li> JavaScript</li>
            <li>Tailwind css</li>
            <li>Bootstrap</li>
            <li>React js</li>
            <li>React Hooks From</li>
            <p>Server Side Scripting / Coding </p>
            <li>node js</li>
          </p>
          <p>Three of my projects:</p>
          <a
            className="link link-secondary"
            href="https://rida-training-fitness.web.app/"
          >
            Rida Training and Fitness
          </a>

          <a
            className="link link-secondary"
            href="https://nextbike-204d0.web.app/"
          >
            NextBike
          </a>

          <a
            className="link link-secondary"
            href="https://bookstore-rashida1.netlify.app/"
          >
            Bookstore
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
