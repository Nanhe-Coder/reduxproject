const Hero = () => {
    return (
      <>
        {/* Cards Section */}
        <div id="collaborations" className="w-full max-w-[90%] mx-auto flex flex-wrap justify-center gap-6 py-8">
          {["Collaborative Space", "Innovation Showcase", "Mentors Connect", "AgroTutor Academy"].map((title, idx) => (
            <div
              key={idx}
              className="max-w-sm w-full p-6 flex flex-col items-center border border-blue-800 rounded-xl space-y-4 text-center"
            >
              <h2 className="font-bold text-2xl sm:text-3xl text-blue-800">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi dignissimos?
              </p>
              <img
                className="w-16 h-16 object-contain"
                src="logo1.jpg"
                alt="Please use items"
              />
              <button className="w-full sm:w-44 bg-blue-800 text-white py-2 rounded hover:bg-blue-700 transition">
                Explore Collaborative
              </button>
            </div>
          ))}
        </div>
  
        {/* Ask DNA Section */}
        <div id="askdna" className="w-full flex flex-col md:flex-row justify-between items-center bg-black p-6">
          <div className="md:w-3/4 w-full text-center md:text-left space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-blue-800">AgroTutor Academy</h2>
            <p className="text-sm sm:text-base text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi dignissimos?
            </p>
            <div className="relative w-full sm:w-[500px] mt-4">
              <input
                type="text"
                placeholder="Enter the text"
                className="w-full px-4 py-2 rounded-xl"
              />
              <button className="absolute right-0 top-0 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Ask DNA
              </button>
            </div>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/4 flex justify-center">
            <img className="w-24 h-20 object-contain" src="logo1.jpg" alt="Please use some items" />
          </div>
        </div>
  
        {/* Mailing & Nominations */}
        <div className="flex flex-col md:flex-row justify-between w-full max-w-[90%] mx-auto gap-6 py-8">
          {[["Mailing List", "signupNow"], ["Nominations Innovations", "Postdata"]].map(([title, btnText], idx) => (
            <div key={idx} className="flex-1 flex flex-col gap-2">
              <h1 className="text-xl font-semibold">{title}</h1>
              <div className="flex items-start gap-4">
                <img className="w-10 h-10" src="logo1.jpg" alt="icon" />
                <div className="flex-1 text-sm">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus inventore iusto, impedit tempore.
                  </p>
                </div>
                <button className="w-32 bg-blue-800 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                  {btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {/* Digital Public Goods Section */}
        <div id="Innovations" className="flex flex-col lg:flex-row justify-between items-start gap-6 w-full max-w-[90%] mx-auto py-10">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <h1 className="text-xl font-semibold text-center sm:text-left">Digital Public Goods and Resources</h1>
                <button className="w-44 bg-blue-800 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                  Save All
                </button>
              </div>
              <img className="w-80 h-44 object-cover rounded-lg shadow" src="logo1.jpg" alt="Resource" />
            </div>
          ))}
        </div>
  
        {/* Footer Section */}
        
        <div className="w-full max-w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-10">
      
            <div  className="flex flex-col space-y-2">
              <h2 className="text-lg font-bold text-black">Collaborations</h2>
              <p>List of collaborations</p>
              <p>Create collaborations</p>
              <h2 className="text-lg font-bold text-black mt-4">Resources</h2>
              <p>Digital public goods</p>
              <p>Digital public goods</p>
              <p>Create collaborations</p>
            </div>
            <div  className="flex flex-col space-y-2">
              <h2 className="text-lg font-bold text-black">Innovations</h2>
              <p>List of Innovations</p>
              <p>Add of Innovations</p>
              <h2 className="text-lg font-bold text-black mt-4">Resources</h2>
              <p>Digital public goods</p>
              <p>Digital public goods</p>
              <p>Create collaborations</p>
            </div>
            <div  className="flex flex-col space-y-2">
              <h2 className="text-lg font-bold text-black">Collaborations</h2>
              <p>List of collaborations</p>
              <p>Create collaborations</p>
              <h2 className="text-lg font-bold text-black mt-4">Resources</h2>
              <p>Digital public goods</p>
              <p>Digital public goods</p>
              <p>Create collaborations</p>
            </div>
            <div  className="flex flex-col space-y-2">
              <h2 className="text-lg font-bold text-black">Collaborations</h2>
              <p>List of collaborations</p>
              <p>Create collaborations</p>
              <h2 className="text-lg font-bold text-black mt-4">Resources</h2>
              <p>Digital public goods</p>
              <p>Digital public goods</p>
              <p>Create collaborations</p>
            </div>
            <div  className="flex flex-col space-y-2">
              <h2 className="text-lg font-bold text-black">Collaborations</h2>
              <p>List of collaborations</p>
              <p>Create collaborations</p>
              <h2 className="text-lg font-bold text-black mt-4">Resources</h2>
              <p>Digital public goods</p>
              <p>Digital public goods</p>
              <p>Create collaborations</p>
            </div>
          
        </div>
      </>
    );
  };
  
  export default Hero;
  