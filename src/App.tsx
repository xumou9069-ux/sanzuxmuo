import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  // 所有页面都只显示内容，不显示顶部导航
  return <Outlet />;
}

export default App;   
