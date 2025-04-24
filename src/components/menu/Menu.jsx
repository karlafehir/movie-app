import { DesktopOutlined, HeartOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const items = [
  { key: "1", icon: <DesktopOutlined />, label: <Link to="/">Home</Link> },
  {
    key: "2",
    icon: <HeartOutlined />,
    label: <Link to="/favorites">Favorites</Link>,
  },
];

const MenuComponent = () => {
  return (
    <div style={{ width: 256 }}>
      <Menu
        className="h-screen"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
};

export default MenuComponent;
