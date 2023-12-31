import React, {useState} from 'react'
import { logo, Calling, Menu, Close } from '../assets'


const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex w-full h-[6.375rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]">
      <nav className="flex w-full pt-[1.625rem] pb-[1rem] pl-[2rem] sm:mx-10 mr-10">
        <div>
            <img className='w-[3.187rem] h-[3.187rem]' src={logo} alt='logo'/>
        </div>
        <div className='sm:flex hidden flex-1 justify-end '>
            <img className='w-[2.134rem] h-[2.138rem]'
            src={Calling} alt='Calling'
            />
            <div className='flex w-[9rem] h-[1.125rem] ml-[1rem] text-[#5EAA97] font-poppins text-xl font-semibold'>
              Need Help?
            </div>
        </div>

        {/* for mobile screen */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? Close : Menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-gray-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul>
              <li>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header