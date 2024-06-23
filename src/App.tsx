// import React, { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { useAppSelector } from "./store/hooks";
// import {
//   increment,
//   decrement,
//   incrementByAmount,
// } from "./features/counter/counterSlice";
import { Card, Layout, Select } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { setLanguage } from "./features/language/languageSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useEffect } from "react";
import { users } from "./MockUserData/user";

const { Header, Content } = Layout;
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const languageValue = useSelector(
    (state: RootState) => state.language.language
  );

  const user = useAppSelector((state) => state?.user);
  console.log(user);

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng));
  };

  useEffect(() => {
    localStorage.setItem('usersData', JSON.stringify(users));
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

    // const [count, setCount] = useState(0);

    // const countGlobal = useAppSelector((state) => state.counter.value);
    // const dispatch = useAppDispatch();

    // return (
    //   <>
    //     <div>
    //       <a href="https://vitejs.dev" target="_blank">
    //         <img src={viteLogo} className="logo" alt="Vite logo" />
    //       </a>
    //       <a href="https://react.dev" target="_blank">
    //         <img src={reactLogo} className="logo react" alt="React logo" />
    //       </a>
    //     </div>
    //     <h1>Vite + React</h1>
    //     <div className="card">
    //       <button onClick={() => setCount((count) => count + 1)}>
    //         count is {count}
    //       </button>
    //       <div className="card">
    //         <button>count In Redux is {countGlobal}</button>
    //       </div>

    //       <p>
    //         Edit <code>src/App.tsx</code> and save to test HMR
    //       </p>
    //     </div>

    //     <div className="card">
    //       <button onClick={() => dispatch(increment())}>+</button>
    //       <button onClick={() => dispatch(decrement())}>-</button>
    //       <button onClick={() => dispatch(incrementByAmount(10))}>
    //         Increment by Amount
    //       </button>
    //     </div>

    //     <p className="read-the-docs">
    //       Click on the Vite and React logos to learn more
    //     </p>
    //   </>
    // );
  );
}

export default App;
