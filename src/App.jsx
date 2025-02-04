import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import React from 'react'

 import moduleName from 'module'
// import {Button} from 'react'
 //import './App.css'

// import Component2 from './component2'
import Home from './Component/Home/Home'
//import Dashboard from './Component/Dashboard/Dashboard'
   import Login from './Component/Rashu/Login/Login'
 import Registration from './Component/Rashu/Registration/Registration'
  import Chatbox from './Component/Rashu/TaskChat/Chatbox';
// import Dash from './Component/Dashboard/Dash';
// import Header from './Header'
// import Dashboard from './Component/Shawrin/Dashboard';
 import { DashboardProvider } from './context/DashboardContext';
import { CurrentDashboard } from './Component/Shawrin/CurrentDashboard';
import { CreateDashboard } from './Component/Shawrin/CreateDashboard';
import { MyDashboard } from './Component/Shawrin/MyDashboard';
import { Layout } from './Component/Shawrin/Layout';
//import './Component/Shawrin/Sstyle.css'

function App() {
//  const [count, setCount] = useState(0)



const [activeTab, setActiveTab] = useState('current');

const renderContent = () => {
  switch (activeTab) {
    case 'current':
      return <CurrentDashboard />;
    case 'create':
      return <CreateDashboard />;
    case 'my':
      return <MyDashboard />;
    default:
      return <CurrentDashboard />;
  }
};
  return (
   
    <>
  
    
   <DashboardProvider>
      <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
        {renderContent()}
      </Layout>
    </DashboardProvider>

    
    













    

    {/* <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/registration" element={<Registration />} />

  <Route path="/dashboard" element={
    <DashboardProvider>
      <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
        {renderContent()}
      </Layout>
    </DashboardProvider>
  }/>
<Route path='/taskchat' element={<Chatbox/>}/>
  <Route path="*" element={<Home />} />
</Routes> */}


      
    </>
    
  )
}

export default App
