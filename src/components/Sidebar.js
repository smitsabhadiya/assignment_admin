import { Layout, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import {CgNotes} from 'react-icons/cg';



const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setcollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setcollapsed(collapsed);
  };

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
        <Menu.Item key="1" icon={<CgNotes style={{transform:"translateY(2px)"}} />}>
          <Link to="/alltask">UserSidebar</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
