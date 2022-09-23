import React from "react";
import { GiComputerFan } from "react-icons/gi";

const Blogs = () => {
  return (
    <div className=" my-12">
      <div>
        <h1 className="flex justify-center lg:text-5xl md:text-4xl text-3xl font-semibold mx-auto my-8">
          Blogs
        </h1>
      </div>
      
      <div className="mx-8 ">
        <div className=" text-justify grid lg:grid-cols-2 gap-x-5 gap-y-5">
          <div className="border rounded-lg p-4 shadow-xl">
            <h2 className="text-xl font-semibold">
              {" "}
              How will you improve the performance of a React Application?
            </h2>
            <p className="mb-2 ">
              Keeping component state local where necessary. Memoizing React
              components to prevent unnecessary re-renders. Code-splitting in
              React using dynamic import(). Windowing or list virtualization in
              React. Lazy loading images in React...
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
          <div className="border rounded-lg p-4 shadow-xl">
            <h2 className="text-xl font-semibold">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p className="mb-2 ">
              There are four main types of state you need to properly manage in
              your React apps: Local state Global state Server state URL state
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

          <div className="border rounded-lg p-4  shadow-xl">
            <h2 className="text-xl font-semibold">
              How does prototypical inheritance work?
            </h2>
            <p className="mb-2 ">
              Every object with its methods and properties contains an internal
              and hidden property known as [[Prototype]]. The Prototypal
              Inheritance is a feature in javascript used to add methods and
              properties in objects. It is a method by which an object can
              inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object.setPrototypeOf.
              Nowadays, in modern language, it is being set using __proto__.
              <div className="text-right my-4 ">
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
          <div className="border rounded-lg p-4 shadow-xl">
            <h2 className="text-xl font-semibold">
              Why you do not set the state directly in React.
            </h2>
            <p className="mb-2 ">
              One should never update the state directly because of the
              following reasons: If you update it directly, calling the
              setState() afterward may just replace the update you made. When
              you directly update the state, it does not change this.state
              immediately. Instead, it creates a pending state transition, and
              accessing it after calling this method will only return the
              present value. You will lose control of the state across all
              components.
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
        </div>
        <div className="my-8">
          <div className="border rounded-lg p-4 shadow-xl">
            <h2 className="text-xl font-semibold">
              What is a unit test? Why should write unit tests?
            </h2>
            <p className="mb-2 ">
              UNIT TESTING is a type of software testing where individual units
              or components of a software are tested. The purpose is to validate
              that each unit of the software code performs as expected. Unit
              Testing is done during the development (coding phase) of an
              application by the developers. Unit Tests isolate a section of
              code and verify its correctness. A unit may be an individual
              function, method, procedure, module, or object. In SDLC, STLC, V
              Model, Unit testing is first level of testing done before
              integration testing. Unit testing is a WhiteBox testing technique
              that is usually performed by the developer. Though, in a practical
              world due to time crunch or reluctance of developers to tests, QA
              engineers also do unit testing. Unit testing allows software
              developers to actually think through the design of the software
              and what has to be done before they write the code. This can help
              them to stay focused and can also help them to create much better
              designs. Testing a code early on can help to define what that
              piece of code is really responsible for.
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
        </div>
      </div>
    </div>
  );
};

export default Blogs;
