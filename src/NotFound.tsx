import { Layout } from "antd";
const { Content } = Layout;

const NotFound: React.FC = () => {
  return (
    <Content
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      className="layout-content-white"
    >
      <h2>404 Page Not Found </h2>
      <h3>ไม่พบหน้าเว็บ</h3>
    </Content>
  );
};

export default NotFound;
