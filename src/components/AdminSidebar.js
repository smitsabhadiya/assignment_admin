import { Layout, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import {CgNotes,CgUser,CgQr,CgMoveTask} from 'react-icons/cg';
import { useHistory } from "react-router-dom";




const { Sider } = Layout;
const {SubMenu} = Menu;
const AdminSidebar = () => {
  const [collapsed, setcollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setcollapsed(collapsed);
  };
  let history = useHistory();

  return (
    <Sider
      collapsible
    
      collapsed={collapsed}
      style={{
        height: "100vh",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #bdbcbc",
        boxShadow: "1px 1px 6px #888888",
        
      
      }}
      onCollapse={onCollapse}
    >
      <div className="logo">
        <Link to="/">
          {!collapsed ? <div style={{padding:"24px",paddingTop:"20px"}}>Qlick2Learn</div> : <div style={{padding:"24px",paddingTop:"20px"}}>Q2</div>}
          
        </Link>
      </div>

      <Menu
        style={{ backgroundColor: "#ffffff", marginTop: "5px" }}
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
      
        <SubMenu key="sub1" icon={<CgUser />} title="Manage Users">
              <Menu.Item key="3">User Stastics</Menu.Item>
              <Menu.Item key="4">Enabel/Disable Us</Menu.Item>
              
            </SubMenu>
            <SubMenu key="sub2" icon={<CgMoveTask />} title="Manage Courses">
              <Menu.Item key="6">Add Courses</Menu.Item>
              <Menu.Item key="8">Courses</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<CgNotes />} title="Notes">
              <Menu.Item key="10">Add Notes</Menu.Item>
              <Menu.Item key="11">Update Notes</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<CgQr />} title="Faq">
              <Menu.Item key="10">Insert Question</Menu.Item>
              <Menu.Item key="11">Update Question</Menu.Item>
            </SubMenu>
        <Menu.Item key="2" icon={<CgUser onClick={()=>{
              localStorage.removeItem('user');
              history.push('/');
              window.location.reload();
          }} size="22px" style={{transform:"translateY(2px)"}} />}>
          <span onClick={()=>{
              localStorage.removeItem('user');
              history.push('/');
              window.location.reload();
          }}>Logout</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AdminSidebar;
