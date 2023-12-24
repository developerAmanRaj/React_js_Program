import React from 'react'

const Contact = () => {
     return (
          <>
               <section className="text-gray-600 body-font relative">
                    <h1 className="mb-5 font-medium text-3xl title-font">Contact from We</h1>
                    <div className="container px-5 py-18 mx-auto flex sm:flex-nowrap flex-wrap">
                         <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                              <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
                              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                                   <div className="lg:w-1/2 px-6 text-left">
                                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs text-left">ADDRESS</h2>
                                        <p className="mt-1">Amba, Aurangabad, (Bihar)</p>
                                   </div>
                                   <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 text-left">
                                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs text-left">EMAIL</h2>
                                        <a className="text-indigo-500 leading-relaxed text-left">developerAman@email.com</a>
                                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                        <p className="leading-relaxed">9155333590</p>
                                   </div>
                              </div>
                         </div>
                         <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-left">Contact</h2>
                              <p className="text-left leading-relaxed mb-5 text-gray-600">We are here to help you contact any problems.</p>
                              <div className="relative mb-2">
                                   <label for="name" className="float-left leading-7 text-sm text-gray-600">Name</label>
                                   <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                              </div>
                              <div className="relative mb-2">
                                   <label for="email" className="float-left leading-7 text-sm text-gray-600">Email</label>
                                   <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                              </div>
                              <div className="relative mb-2">
                                   <label for="message" className="float-left leading-7 text-sm text-gray-600">Message</label>
                                   <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                              </div>
                              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact</button>
                              <p className="text-xs text-gray-500 mt-3">Hey! We are here to help you contact for any problems..</p>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default Contact
