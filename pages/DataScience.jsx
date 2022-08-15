import React from 'react'

const DataScience = () => {
    return (
        <div className="w-full">
            <div className=" h-[25vh] relative">
                <div className="absolute top-0 left-0 w-full h-[25vh]"/>
            </div>
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className='text-xl tracking-widest uppercase font-semibold'>Data Science and Machine Learning for
                    absolute beginners
                </p>
                <p>Course Outline</p>
            </div>
            <div className="max-w-[1240px] mx-auto px-2 py-16 grid lg:grid-cols-2 gap-16 pl-10">

                <div className='basis-1/2'>
                    <p className='font-semibold'>Data Science</p>
                    <ul className='list-inside list-disc'>
                        <li>Python basic
                            <ul>
                                <li>- Why program, an intro</li>
                                <li>- variables, expressions and satements</li>
                                <li>- conditional execution</li>
                                <li>- functions</li>
                                <li>- loops and iteration</li>
                                <li>- strings</li>
                                <li>- File handling</li>
                                <li>- lists</li>
                                <li>- dictionaries</li>
                                <li>- tuples</li>
                            </ul>
                        </li>
                        <li>Advanced python:
                            <ul>
                                <li>- Object Oriented Programming with python</li>
                                <li>- Database with python</li>
                                <li>- REST API with python</li>
                            </ul>
                        </li>
                        <li>Data analysis and visualization:
                            <ul>
                                <li>- Numpy</li>
                                <li>- Pandas</li>
                                <li>- Matplotlib</li>
                                <li>- Seaborn</li>
                                <li>- Case study</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='basis-1/2'>
                    <p className='font-semibold'>Machine learning</p>
                    <ul className='list-inside list-disc'>
                        <li>Supervised learning:
                            <ul>
                                <li>- Linear regression</li>
                                <li>- Polynomial regression</li>
                                <li>- Logistic regression</li>
                                <li>- Regularization</li>
                            </ul>
                        </li>
                        <li>Unsupervised learning:
                            <ul>
                                <li>- Clustering</li>
                                <li>- Anomaly Detection</li>
                                <li>- Recommender Systems</li>
                                <li>- Reinforcement Learning</li>
                            </ul>
                        </li>
                        <li>Advanced Learning Algorithms:
                            <ul>
                                <li>- Neural Networks</li>
                                <li>- Training Neural Networks using tensorflow</li>
                                <li>- Bias, Variance</li>
                                <li>- Decision tree</li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <p><span className='text-indigo-400 text-lg'>&#9733;&#9733;&#9733;</span> Best Practice, Practical Advice</p>
            </div>
        </div>
    )
}

export default DataScience