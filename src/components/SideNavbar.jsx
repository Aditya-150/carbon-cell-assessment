import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FiHome, FiTrendingUp, FiTrello } from "react-icons/fi";
import logo from "../assets/carbonLogo.png";
import Profile from "./Profile";

function Home() {
  return (
    <>
      <h1>Task 1</h1>
    </>
  );
}
function Homo() {
  return (
    <>
      <h1>Task 2</h1>
    </>
  );
}


const tabList = [
  { title: "Home", icon: <FiHome size={20} />, content: <Home /> },
  { title: "Chart", icon: <FiTrello size={20} />, content: <Homo /> },
  { title: "Prices", icon: <FiTrendingUp size={20} />, content: <Profile /> },
];

export default function SideNavbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <button
        className="p-4 absolute top-4 left-4 bg-zinc-700 rounded-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FaBarsStaggered size={20} />
      </button>
      <div
        className={`h-screen p-4 bg-zinc-800 absolute top-0 left-0 z-40 ${
          sidebarOpen ? "" : "hidden"
        }`}
      >
        <div className="flex flex-row items-center gap-8 mb-12">
          <img src={logo} alt="logo" className="h-10 w-auto" />
          <FaBarsStaggered
            onClick={() => setSidebarOpen(!sidebarOpen)}
            size={20}
            className="cursor-pointer"
          />
        </div>
        {tabList.map((tab, index) => (
          <div
            key={index}
            className={`group flex flex-row items-center gap-4 mb-8 text-zinc-300 cursor-pointer ${
              activeTab === index ? "text-green-500" : "text-zinc-300"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.icon}
            <p className="text-lg">{tab.title}</p>
          </div>
        ))}
      </div>
      {tabList.map((tab, index) => {
        if (index === activeTab) {
          return (
            <div key={index} className="text-white">
              {tab.content}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
