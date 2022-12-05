import React from "react";

const projectData = [
  {
    id: 1,
    name: "UNISEQ TECH & ENGINEERING LTD",
    clientLink: "https://computer-parts-d6618.web.app/",
    githubClient: "https://github.com/Rashidaakter1/uniseq-ltd",
    githubServer: "https://github.com/Rashidaakter1/uniseq-server-ltd",
    img: "https://i.ibb.co/mhpYBJF/image1.png",
    slide: {
      img1: " https://i.ibb.co/TKqnryN/uni-signup.png",
      img2: " https://i.ibb.co/P5ryDdP/uni-login.png",
      img3: " https://i.ibb.co/HH9SGVj/uni-admin.png",
    },
    featuresPart: {
      feature1:
        "Implemented Client site with React js and used React Router for Protected route",
      feature2:
        "Made Homepage , Login page and Dashboard for users who sign up",
      feature3: "Enabled admin role and had dashboard for admin users",
    },
  },

  {
    id: 2,
    name: "MOTOR'S MANIA",
    clientLink: "https://nextbike-204d0.web.app/",
    githubClient: "https://github.com/Rashidaakter1/next-bike-client",
    githubServer: "https://github.com/Rashidaakter1/next-bike-server",
    img: "https://i.ibb.co/6ZtFPCy/motor.png",
    slide: {
      img1: " https://i.ibb.co/MPrjjbR/mtm-add-1.png",
      img2: "https://i.ibb.co/dWy9tLV/mtm-login.png",
      img3: "https://i.ibb.co/0qNHcjQ/mtn-manage.png",
    },
    featuresPart: {
      feature1: "Created Homepage using banner , items and reviews",
      feature2: "Made Manage Items where users can manage their products",
      feature3: "Implemented firebase google authentication",
    },
  },
  {
    id: 3,
    name: "BOOKSTORE",
    clientLink: "https://bookstore-rashida1.netlify.app/",
    githubClient: "https://github.com/Rashidaakter1/Book-Store",
    githubServer: "https://github.com/Rashidaakter1/uniseq-server-ltd",
    img: "https://i.ibb.co/LC3dZB1/bookstore-2.png",
    slide: {
      img1: "https://i.ibb.co/nLYCB1w/bookstore-1.png",
      img2: "https://i.ibb.co/nLYCB1w/bookstore-1.png",
      img3: "https://i.ibb.co/nLYCB1w/bookstore-1.png",
    },
    featuresPart: {
      feature1: "Worked With React Router",
      feature2:
        "Javascript project having dashboard , reviews and blogs section",
      feature3: "Implemented Recharts for graphs",
    },
  },
  {
    id: 4,
    name: "TO DO APP",
    clientLink: "https://to-do-app-rashida1.netlify.app/",
    githubClient: "https://github.com/Rashidaakter1/to-do-app",
    githubServer: "https://github.com/Rashidaakter1/task-management-server",
    img: "https://i.ibb.co/19ZpBfD/todoapphome.png",
    slide: {
      img1: "https://i.ibb.co/xFSnG1w/todoapphome.png",
      img2: "https://i.ibb.co/wrG1dB6/cal.png",
      img3: "https://i.ibb.co/R4zZ8Cc/comtask.png",
    },
    featuresPart: {
      feature1: "Can be added your daily tasks with date",
      feature2: "Implemented day picker for calender ",
      feature3: "Completed task are for the task you completed",
    },
  },
];
const Projetcs = () => {
  return (
    <div className="lg:my-24">
      <h2 className="lg:text-3xl md:text-2xl text-xl text-center ">
        Some Of My Works / Projects
      </h2>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-4 my-8 lg:gap-x-24  lg:gap-y-16">
        {projectData.map((project) => (
          <div className="p-3 lg:w-56 shadow-xl">
            <h1>{project.name}</h1>
            <a href={project.clientLink}>clientLink </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projetcs;
