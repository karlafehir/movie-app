import {
  DesktopOutlined,
  HeartOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const items = [
  { key: "/", icon: <DesktopOutlined />, label: <Link to="/">Home</Link> },
  {
    key: "/favorites",
    icon: <HeartOutlined />,
    label: <Link to="/favorites">Favorites</Link>,
  },
  {
    key: "/genres",
    icon: <StarOutlined />,
    label: <Link to="/genres">Genres</Link>,
  },
  {
    key: "/actors",
    icon: <UserOutlined />,
    label: <Link to="/actors">Actors</Link>,
  },
];

const MenuComponent = () => {
  const location = useLocation();
  return (
    <div className="w-72 h-screen overflow-hidden flex-shrink-0">
      <Menu
        className="h-full"
        selectedKeys={[location.pathname]}
        mode="inline"
        theme="dark"
        items={items}
        style={{
          backgroundColor: "#1a1a1a",
        }}
      />
    </div>
  );
};

export default MenuComponent;
