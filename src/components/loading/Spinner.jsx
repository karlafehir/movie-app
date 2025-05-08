import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </div>
  );
};

export default Spinner;
