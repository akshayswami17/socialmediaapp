import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Sidebar from './components/Sidebar.jsx';
import FormComponent from './components/FormComponent.jsx';
import Post from './components/Post.jsx';
import PostList from './components/PostList.jsx';
import { useState } from 'react';
function App() {
  const [selectedTab , setselectedTab] = useState("Home");

  return (
   <div>
    <div className='App-container'>
    <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab}></Sidebar>
    <div className='Content'>
    <Header /> 
    { selectedTab === "Home" ? (<PostList/>) : (<FormComponent/>)

    } 
    
    
    <Footer/>

    </div>

    
    </div>

   </div>
  );
}

export default App;
