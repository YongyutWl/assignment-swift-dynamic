import "./App.css";
import { Card, Layout, Select } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { setLanguage } from "./features/language/languageSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useEffect } from "react";
import { users } from "./MockUserData/user";
import './i18n'

const { Header, Content } = Layout;
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const languageValue = useSelector(
    (state: RootState) => state.language.language
  );

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng));
  };

  useEffect(() => {
    localStorage.setItem("usersData", JSON.stringify(users));
  }, []);

  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "#6eda78",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Select
          defaultValue={languageValue}
          style={{ width: 120 }}
          onChange={handleChangeLanguage}
          options={[
            { value: "en", label: "English" },
            { value: "th", label: "Thai" },
          ]}
        />
      </Header>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Card
          title={`${t("test")} 1`}
          style={{ width: 300, margin: "0 10px" }}
          onClick={() => navigate("/assignment1")}
        >
          <p>{t("Layout & Style")}</p>
        </Card>
        <Card
          title={`${t("test")} 2`}
          style={{ width: 300, margin: "0 10px" }}
          onClick={() => navigate("/assignment2")}
        >
          <p>{t("Form & Table")}</p>
        </Card>
      </Content>
    </Layout>
  );
}

export default App;
