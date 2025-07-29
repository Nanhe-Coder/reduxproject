import { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import Hero from  "./Hero";

const Navbar=()=>{
 
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="w-full bg-white shadow mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and title */}
          <div className="flex items-center space-x-2">
            <img className="w-6 h-6" src="logo1.jpg" alt="Logo" />
            <span className="font-semibold text-blue-800 text-lg">ICTforAg</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li><a href="#collaborations">Collaborations</a></li>
            <li><a href="#Innovations">Innovations</a></li>
            <li><a href="#askdna">Ask DNA</a></li>
            <li><a href="#">Academy</a></li>
            <li><a href="#">Mentors</a></li>
            <li><Link to="/crud">Projects</Link></li>
          </ul>

          {/* Right Button */}
          <div className="hidden md:block">
            <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
             <Link to="/login"> Sign Up</Link>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6 text-blue-800" /> : <Menu className="w-6 h-6 text-blue-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white border-t">
          <a href="#collaborations" className="block text-gray-700">Collaborations</a>
          <a href="#Innovations" className="block text-gray-700">Innovations</a>
          <a href="#askdna" className="block text-gray-700">Ask DNA</a>
          <a href="#" className="block text-gray-700">Academy</a>
          <a href="#" className="block text-gray-700">Mentors</a>
          <a href="#" className="block text-gray-700">Resources</a>
          <button className="w-full bg-blue-800 text-white py-2 rounded mt-2 hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>
      )}
    </nav>
     <Hero/>
        </>
    )
}
export default Navbar