import Link from "next/link";
import React from "react";

const dataScience = () => {
  return (
    <div className="w-full">
      <div className=" h-[15vh] relative">
        <div className="absolute top-0 left-0 w-full h-[25vh]" />
      </div>
      <div className="max-w-[1240px] mx-auto px-2 py-10">
        <p className="text-xl tracking-widest uppercase font-semibold">
          Data Science and Machine Learning for absolute beginners
        </p>
        <p>Course Outline</p>
      </div>
      <div className="max-w-[1240px] mx-auto px-2 py-16 grid lg:grid-cols-2 gap-16 pl-10">
        <div className="basis-1/2">
          <p className="font-semibold text-blue-700 mb-5 text-2xl uppercase">Data Science</p>
          <hr className="border-2 border-b-gray-400 "/>
          <ul className="list-inside list-disc">
            <li>
              Python basic
              <ul>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Why program, an intro</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- variables, expressions and satements</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- conditional execution</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- functions</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- loops and iteration</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- strings</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- File handling</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- lists</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- dictionaries</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- tuples</li>
              </ul>
            </li>
            <li>
              Advanced python:
              <ul>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Object Oriented Programming with python</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Database with python</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- REST API with python</li>
              </ul>
            </li>
            <li>
              Data analysis and visualization:
              <ul>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Numpy</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Pandas</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Matplotlib</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Seaborn</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Case study</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="basis-1/2">
          <p className="font-semibold text-blue-700 mb-5 text-2xl uppercase">Machine learning</p>
          <hr className="border-2 border-b-gray-400 "/>
          <ul className="list-inside list-disc">
            <li>
              Supervised learning:
              <ul>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Linear regression</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Polynomial regression</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Logistic regression</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Regularization</li>
              </ul>
            </li>
            <li>
              Unsupervised learning:
              <ul>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Clustering</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Anomaly Detection</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Recommender Systems</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Reinforcement Learning</li>
              </ul>
            </li>
            <li>
              Advanced Learning Algorithms:
              <ul>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Neural Networks</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Training Neural Networks using tensorflow</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Bias, Variance</li>
                <li className="bg-gray-300 hover:bg-gray-100 rounded-lg my-3 p-2 items-center cursor-pointer">- Decision tree</li>
              </ul>
            </li>
          </ul>
        </div>
        <p>
          <span className="text-indigo-400 text-lg">&#9733;&#9733;&#9733;</span>{" "}
          Best Practice, Practical Advice
        </p>
        
      </div>
      <div className="max-w-[1240px] mx-auto px-2 py-2">
      <Link href="/#SkillDevelopment">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default dataScience;
