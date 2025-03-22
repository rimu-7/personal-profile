import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Navigation from '../Pages/Shared/Navigation';

const Main = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-black dark:bg-[#212121] dark:text-white">
      <Navbar />
      <Navigation/>
      <div className="flex-grow w-full max-w-[1800px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;