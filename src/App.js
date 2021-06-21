import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from './pages/Login';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Sidebar from './components/Sidebar';
import AdminSidebar from './components/AdminSidebar';
import AdminRouter from './routes/AdminRoute';
import AddCourse from './pages/AddCourse'



const App = () => {
  let user  =JSON.parse(localStorage.getItem('user'));


  return (
    <Layout>
      { user && user.isUserAdmin ? <AdminSidebar/>:<Sidebar/>}
              <Switch>
                   
                    <Route path="/" exact component={Login} />
                    <AdminRouter path="/admin/addcourse" exact component={AddCourse} />
                    
                   
                 
                
                  
              </Switch>
          
         
</Layout>
     
  );
}

export default App;
