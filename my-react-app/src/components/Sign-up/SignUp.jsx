import React from 'react';

const SignUp = () => {
     return (
          <>
               <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                         <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                              <h1 className="title-font text-left  font-medium text-3xl text-gray-900">
                                   Enter your Full name and Email to Sign up by which you can buy courses.
                              </h1>
                              <p className="leading-relaxed text-left mt-4">
                                   After Sign up you will buy the pro courses and premium courses available for frontend and also you wil get 10% of discound for this.
                              </p>
                         </div>
                         <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                              <div className="relative mb-4">
                                   <label for="full-name" className="float-left leading-5 text-gray-600">
                                        Full Name
                                   </label>
                                   <input
                                        type="text"
                                        id="full-name"
                                        name="full-name"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                   />
                              </div>
                              <div className="relative mb-4">
                                   <label for="email" className="leading-7 text-sm float-left text-gray-600">
                                        Email
                                   </label>
                                   <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                   />
                              </div>
                              <button className="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
                                   Sign up
                              </button>
                              <p className="text-xs text-gray-500 mt-3">After Sign up you will be able to buy pro courses.</p>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default SignUp;