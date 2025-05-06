import {
  DesktopOutlined,
  HeartOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const items = [
  { key: "1", icon: <DesktopOutlined />, label: <Link to="/">Home</Link> },
  {
    key: "2",
    icon: <HeartOutlined />,
    label: <Link to="/favorites">Favorites</Link>,
  },
  {
    key: "3",
    icon: <StarOutlined />,
    label: <Link to="/genres">Genres</Link>,
  },
  {
    key: "4",
    icon: <StarOutlined />,
    label: <Link to="/actors">Actors</Link>,
  },
];

const MenuComponent = () => {
  return (
    <div className="w-72 h-screen overflow-hidden flex-shrink-0">
      <Menu
        className="h-full"
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
