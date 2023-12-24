
import React from 'react';
import * as optionImages from './option-images';

const Option = () => {
     return (
          <section className="text-gray-600 body-font mt-14">
               <div className="container px-5 py-6 mx-auto">
                    <h4 className="title-font font-medium sm:text-3xl text-gray-900">Some popular course are here</h4>
                    <div className="flex flex-wrap m-4">
                         <div className="p-4 md:w-1/3">
                              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                   <img className="lg:h-35 md:h-36 w-50% mx-auto object-cover object-center" src={optionImages.htmlImage} alt="blog" />
                                   <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">HTML</h1>
                                        <p className="leading-relaxed mb-3">This HTML course will help you to learn the basics and advance html from begineer to advance under 15 days..</p>
                                        <div className="flex items-center flex-wrap ">
                                             <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More
                                                  <svg className="w-4 h-4 ml-2 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                       <path d="M5 12h14"></path>
                                                       <path d="M12 5l7 7-7 7"></path>
                                                  </svg>
                                             </a>
                                             <span className="text-gray-400 mr-3 cursor-pointer inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                  <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                       <circle cx="12" cy="12" r="3"></circle>
                                                  </svg>1.2K
                                             </span>
                                             <span className="text-gray-400 cursor-pointer inline-flex items-center leading-none text-sm">
                                                  <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                       <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                  </svg>6
                                             </span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="p-4 md:w-1/3">
                              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                   <img className="lg:h-35 md:h-36 w-50% mx-auto object-cover object-center" src={optionImages.jsImage} alt="blog" />
                                   <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Javascript</h1>
                                        <p className="leading-relaxed mb-3">Follow along this javascript awesome course to became a javascript expert under 30 days with 100+ projects and 500+ interview questions</p>
                                        <div className="flex items-center flex-wrap ">
                                             <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More
                                                  <svg className="w-4 h-4 ml-2 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                       <path d="M5 12h14"></path>
                                                       <path d="M12 5l7 7-7 7"></path>
                                                  </svg>
                                             </a>
                                             <span className="text-gray-400 mr-3 cursor-pointer inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                  <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                       <circle cx="12" cy="12" r="3"></circle>
                                                  </svg>5.2K
                                             </span>
                                             <span className="text-gray-400 cursor-pointer inline-flex items-center leading-none text-sm">
                                                  <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                       <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                  </svg>14
                                             </span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="p-4 md:w-1/3">
                              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                   <img className="lg:h-35 md:h-36 w-50% mx-auto object-cover object-center" src={optionImages.cssImage} alt="blog" />
                                   <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">CSS</h1>
                                        <p className="leading-relaxed mb-3">Don't miss this awesome CSS course if you want to become a designer expert and design beautiful ui using css..</p>
                                        <div className="flex items-center flex-wrap ">
                                             <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More
                                                  <svg className="w-4 h-4 ml-2 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                       <path d="M5 12h14"></path>
                                                       <path d="M12 5l7 7-7 7"></path>
                                                  </svg>
                                             </a>
                                             <span className="text-gray-400 mr-3 cursor-pointer inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                  <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                       <circle cx="12" cy="12" r="3"></circle>
                                                  </svg>500
                                             </span>
                                             <span className="text-gray-400 cursor-pointer inline-flex items-center leading-none text-sm">
                                                  <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                       <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                  </svg>8
                                             </span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="p-4 md:w-1/3">
                              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                   <img className="lg:h-35 md:h-36 w-50% mx-auto object-cover object-center" src={optionImages.reactImage} alt="blog" />
                                   <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">React js</h1>
                                        <p className="leading-relaxed mb-3">Follow this course to learn react js from scratch it helps you to learn all the react concepts easily in 1months with mern stack projects..</p>
                                        <div className="flex items-center flex-wrap ">
                                             <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More
                                                  <svg className="w-4 h-4 ml-2 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                       <path d="M5 12h14"></path>
                                                       <path d="M12 5l7 7-7 7"></path>
                                                  </svg>
                                             </a>
                                             <span className="text-gray-400 mr-3 cursor-pointer inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                  <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                       <circle cx="12" cy="12" r="3"></circle>
                                                  </svg>9.2k
                                             </span>
                                             <span className="text-gray-400 cursor-pointer inline-flex items-center leading-none text-sm">
                                                  <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                       <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                  </svg>5.9k
                                             </span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="p-4 md:w-1/3">
                              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                   <img className="lg:h-35 md:h-36 w-50% mx-auto object-cover object-center" src={optionImages.pythonImage} alt="blog" />
                                   <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Python</h1>
                                        <p className="leading-relaxed mb-3">Learn from here Phthon course world's popular use language it help's to learn machine learning follow this course to learn python under 2 months from scratch..</p>
                                        <div className="flex items-center flex-wrap ">
                                             <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More
                                                  <svg className="w-4 h-4 ml-2 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                       <path d="M5 12h14"></path>
                                                       <path d="M12 5l7 7-7 7"></path>
                                                  </svg>
                                             </a>
                                             <span className="text-gray-400 mr-3 cursor-pointer inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                  <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                       <circle cx="12" cy="12" r="3"></circle>
                                                  </svg>2.6k
                                             </span>
                                             <span className="text-gray-400 cursor-pointer inline-flex items-center leading-none text-sm">
                                                  <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                       <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                  </svg>230
                                             </span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="p-4 md:w-1/3">
                              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                   <img className="lg:h-35 md:h-36 w-50% mx-auto object-cover object-center" src={optionImages.nodejsImage} alt="blog" />
                                   <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Node js</h1>
                                        <p className="leading-relaxed mb-3">Master the Node js language from scratch. It is a world's useage backend language follow to learn.</p>
                                        <div className="flex items-center flex-wrap ">
                                             <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More
                                                  <svg className="w-4 h-4 ml-2 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                       <path d="M5 12h14"></path>
                                                       <path d="M12 5l7 7-7 7"></path>
                                                  </svg>
                                             </a>
                                             <span className="text-gray-400 mr-3 cursor-pointer inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                  <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                       <circle cx="12" cy="12" r="3"></circle>
                                                  </svg>8.4k
                                             </span>
                                             <span className="text-gray-400 cursor-pointer inline-flex items-center leading-none text-sm">
                                                  <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                       <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                  </svg>10k
                                             </span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="p-4 md:w-1/3">
                              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                   <img className="lg:h-35 md:h-36 w-50% mx-auto object-cover object-center" src={optionImages.phpImage} alt="blog" />
                                   <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Php</h1>
                                        <p className="leading-relaxed mb-3">Learn Php in 3 months by eact concepts and builds full stack awesome projects by following this course..</p>
                                        <div className="flex items-center flex-wrap ">
                                             <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More
                                                  <svg className="w-4 h-4 ml-2 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                       <path d="M5 12h14"></path>
                                                       <path d="M12 5l7 7-7 7"></path>
                                                  </svg>
                                             </a>
                                             <span className="text-gray-400 mr-3 cursor-pointer inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                  <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                       <circle cx="12" cy="12" r="3"></circle>
                                                  </svg>1.1k
                                             </span>
                                             <span className="text-gray-400 cursor-pointer inline-flex items-center leading-none text-sm">
                                                  <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                       <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                  </svg>120
                                             </span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Option;
