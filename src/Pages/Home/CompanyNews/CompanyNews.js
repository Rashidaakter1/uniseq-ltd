import React from "react";
import { GiComputerFan } from "react-icons/gi";

const CompanyNews = () => {
  return (
    <div className="lg:mx-24 md:mx-6 mx-8">
      <div className="my-6 mx-4">
        <div>
          <h1 className="flex justify-center lg:text-5xl md:text-4xl text-3xl font-semibold mx-auto my-8 mb-4">
            <div
              style={{ color: "#c45d3c" }}
              className="lg:mx-6 mt-1 lg:mt-0
             mx-2"
            >
              <GiComputerFan />
            </div>
            Company News and Advices To Our Company{" "}
          </h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        <div>
          <h1 className="font-bold text-center text-2xl"> About Uniseq Tech</h1>

          <p className="p-8 text-justify">
            Uniseq Tech has been founded on 1 March 2007. From then to now,
            Uniseq Tech has won the heart of many people and now is a
            country-wide renowned brand. That has been possible due to the hard
            work Uniseq Tech has done to satisfy its customers. Having the aim
            to satisfy customers, providing customers with their required
            products, and being true to their motto, “Customers Come First,” has
            brought Uniseq Tech to the top of the E-Commerce Site and also is
            one of the largest Computer and Technology product retailers. Uniseq
            Tech has over 700 employees and is growing more and more, working
            diligently to fulfill the Main Criteria of Uniseq Tech’s Motto or
            Vision.Uniseq Tech also has two branches in Chittagong...
            <div className="my-4 text-right">
              <a
                style={{ backgroundColor: " #c45d3c" }}
                href="/home"
                className="btn"
              >
                Read More
              </a>
            </div>
          </p>
        </div>
        <div>
          <h1 className="font-bold text-center text-2xl">
            ISO Certified Quality Management System
          </h1>
          <p className="p-8 text-justify">
            Uniseq Tech has always managed the standards for Quality management.
            In 2022, Uniseq Tech & Engineering Ltd. was certified with the
            well-known "ISO 9001:2015 certification". This marked a
            groundbreaking achievement for us. As an "ISO 9001:2015 certified"
            organization; we consistently maintain all sorts of regulatory
            requirements to provide the best products and services to meet any
            customer requirement. Uniseq Tech is located in 5 Central
            territories in Dhaka, Gazipur, Chittagong, Khulna, and Rangpur.
            Uniseq Tech has a total of 16 Physical outlets all over the country;
            selling genuine Tech products. Among them, 9 outlets are in Dhaka as
            it’s the capital city...
            <div className="text-right mx-auto my-4">
              <a
                style={{ backgroundColor: " #c45d3c" }}
                href="/home"
                className="btn"
              >
                Read More
              </a>
            </div>
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-center text-2xl">
          The Main Goal and Aim
        </h1>
        <p className="p-8  text-justify ">
          We are Uniseq Tech, and we are here to help you with all your
          technology needs. We aim to provide all the requirements of our
          customers and help them satisfy their needs, wants, and desires. We
          delight in seeing our customers happy and satisfied with our
          resiliency in providing them with their products. Our complete focus
          is on the customers. We keep tabs and records on what our customers
          want, and we try our level best to bring that to them. We are already
          providing our customers with a delivery system so that they can order
          online and receive their products from their area. They do not have to
          travel long distances to get their desired product...
          <div className="text-right my-4">
            <a
              style={{ backgroundColor: " #c45d3c" }}
              href="/home"
              className="btn"
            >
              Read More
            </a>
          </div>
        </p>
      </div>
      <hr />
    </div>
  );
};

export default CompanyNews;
