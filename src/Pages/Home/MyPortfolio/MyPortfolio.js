import React from "react";

const MyPortfolio = () => {
  return (
    <div className="mx-10 my-12 ">
      <h1 className="flex justify-center lg:text-4xl md:text-3xl text-3xl font-semibold mx-auto my-8">
        {" "}
        MY PORTFOLIO
      </h1>
      <div class="mx-6 my-10">
        <div className="grid lg:grid-cols-3 md:grid-col-1 grid-col-1">
          <div className="border col-span-2">
            {" "}
            <h2 class="card-title">Rashida Akter</h2>
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
          </div>
          <div className="border col-span-1">
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/307825672_408912468068558_2421899053514021381_n.png?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=guZZgIr8T1EAX8WucUE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLlKkbjKamt6GiLZVUl8XOu_65Dce8qzJInZahYfXRksg&oe=635493B4"
              alt=""
            />
          </div>
        </div>
        <div class="card-body">
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
