import React from "react";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import {
  SiBootstrap,
  SiTailwindcss,
  SiTypescript,
  SiNetlify,
  SiCanva,
  SiFirebase,
} from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import ServerSide from "./ServerSide";
import Projetcs from "./Projetcs";

const MyPortfolio = () => {
  return (
    <div className="mx-10 lg:my-12  my-4 md:my-6">
      <h1 className="flex justify-center lg:text-4xl md:text-3xl text-3xl font-semibold mx-auto my-8">
        {" "}
        MY PORTFOLIO
      </h1>
      <div class="mx-6 my-10">
        <div className="grid lg:grid-cols-3 md:grid-col-1 grid-col-1 lg:my-12 md:my-8 my-6 ">
          <div className=" col-span-2">
            {" "}
            <h2 class="lg:text-5xl md:text-3xl text-xl my-2">
              Rashida, A{" "}
              <span className="text-red-500">Frontend Developer</span>{" "}
            </h2>
            <p className="text-lg">E-MAIL : rashidaakterchadni@gmail.com</p>
            <p className="text-lg">Contact : +8801758971667</p>
          </div>
          <div className="col-span-1">
            <img
              className="my-auto"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/307825672_408912468068558_2421899053514021381_n.png?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=guZZgIr8T1EAX8WucUE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLlKkbjKamt6GiLZVUl8XOu_65Dce8qzJInZahYfXRksg&oe=635493B4"
              alt=""
            />
          </div>
        </div>

        <div className="lg:my-24">
          <h2 className="lg:text-3xl md:text-2xl text-xl text-center">
            SKILLS : I have learnt Client Side Scripting / Coding -
          </h2>
          <div className="mx-6 lg:my-10 md:my-5 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 ">
            <div className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
              <div
                className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                style={{ fontSize: "8vw" }}
              >
                {" "}
                <ImHtmlFive></ImHtmlFive>
              </div>
              <p className="text-center my-2 text-xl ">HTML</p>
            </div>
            <div className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
              <div
                className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                style={{ fontSize: "8vw" }}
              >
                {" "}
                <IoLogoCss3 />
              </div>
              <p className="text-center my-2 text-xl ">CSS</p>
            </div>
            <div className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
              <div
                className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                style={{ fontSize: "8vw" }}
              >
                {" "}
                <IoLogoJavascript />
              </div>
              <p className="text-center my-2 text-xl ">Javascript</p>
            </div>
            <div className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
              <div
                className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                style={{ fontSize: "8vw" }}
              >
                {" "}
                <SiBootstrap />
              </div>
              <p className="text-center my-2 text-xl ">Bootstrap</p>
            </div>
            <div className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
              <div
                className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                style={{ fontSize: "8vw" }}
              >
                {" "}
                <SiTailwindcss></SiTailwindcss>
              </div>
              <p className="text-center my-2 text-xl ">Tailwindcss</p>
            </div>
            <div className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
              <div
                className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                style={{ fontSize: "8vw" }}
              >
                {" "}
                <FaReact />
              </div>
              <p className="text-center my-2 text-xl ">React</p>
            </div>
            <div className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
              <div
                className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                style={{ fontSize: "8vw" }}
              >
                {" "}
                <TbBrandNextjs />
              </div>
              <p className="text-center my-2 text-xl ">Nextjs</p>
            </div>
            <div className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
              <div
                className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                style={{ fontSize: "8vw" }}
              >
                {" "}
                <FaGithub />
              </div>
              <p className="text-center my-2 text-xl ">Github</p>
            </div>
            <div className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
              <div
                className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                style={{ fontSize: "8vw" }}
              >
                {" "}
                <SiTypescript></SiTypescript>
              </div>
              <p className="text-center my-2 text-xl ">Typescript</p>
            </div>
            <div className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
              <div
                className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                style={{ fontSize: "8vw" }}
              >
                {" "}
                <SiNetlify />
              </div>
              <p className="text-center my-2 text-xl ">Netlify</p>
            </div>
            <div className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
              <div
                className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                style={{ fontSize: "8vw" }}
              >
                {" "}
                <SiFirebase />
              </div>
              <p className="text-center my-2 text-xl ">Firebase</p>
            </div>
            <div className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
              <div
                className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                style={{ fontSize: "8vw" }}
              >
                {" "}
                <SiCanva />
              </div>
              <p className="text-center my-2 text-xl ">Canva</p>
            </div>
          </div>
          <hr />
        </div>
        <ServerSide></ServerSide>

        <hr />

        <Projetcs></Projetcs>
        {/* <div class="card-body">
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
        </div> */}
      </div>
    </div>
  );
};

export default MyPortfolio;
