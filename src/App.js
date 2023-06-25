import { createContext, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";

export const sidebarContext = createContext();
function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <sidebarContext.Provider value={{ showSideBar, setShowSideBar }}>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
        <Header />
        <Body />
        </div>
      </div>
    </sidebarContext.Provider>
  );
}

export default App;
