/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Flex, Layout, Table, Typography } from "antd";
import FormAndTable from "./FormAndTable";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { setUser } from "../../features/users/userSlice";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { IUser } from "../../interface/IUser";

const { Header, Content } = Layout;

const Assignment2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [dataSource, setDataSource] = useState<IUser[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const columns: any = [
    {
      title: "Name",
      dataIndex: "firstname",
      key: "firstname",
      render: (_text: string, record: any) => {
        return (
          <Typography.Text>{`${record.firstname} ${record.lastname}`}</Typography.Text>
        );
      },
      sorter: (a: any, b: any) => {
        return a.firstname.localeCompare(b.firstname);
      },
    },

    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      sorter: (a: any, b: any) => {
        return a.gender.localeCompare(b.gender);
      },
    },
    {
      title: "Mobile Phone",
      dataIndex: "mobilePhone",
      key: "mobilePhone",
      sorter: (a: any, b: any) => {
        return a.mobilePhone - b.mobilePhone;
      },
    },
    {
      title: "Expected Salary",
      dataIndex: "expectedSalary",
      key: "expectedSalary",
      sorter: (a: any, b: any) => {
        return a.expectedSalary - b.expectedSalary;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_text: string, record: any) => {
        return (
          <Flex align="center">
            <Button
              onClick={() => {
                dispatch(setUser(record));
              }}
            >
              Edit
            </Button>
            <Button onClick={() => deleteRecord(record.id)}>Delete</Button>
          </Flex>
        );
      },
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
      setSelectedRowKeys(selectedRowKeys);
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  const deleteRecord = (id: string) => {
    const newDataSource = dataSource.filter((item) => item.id !== id);
    setDataSource(newDataSource);
    localStorage.setItem("usersData", JSON.stringify(newDataSource));
  };

  const getUser = () => {
    const user = localStorage.getItem("usersData");
    if (user) {
      setDataSource(JSON.parse(user));
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "#6eda78",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography.Title level={3}>{`${t("Form & Table")}`}</Typography.Title>
        <Button onClick={() => navigate("/")}>Home</Button>
      </Header>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
        className="layout-card-content"
      >
        <FormAndTable />

        <Table
          dataSource={dataSource || []}
          columns={columns}
          rowKey="id"
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
        />
      </Content>
    </Layout>
  );
};

export default Assignment2;
