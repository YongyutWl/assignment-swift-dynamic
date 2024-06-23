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
            <Button
              onClick={() => {
                deleteRecord(record.id);
              }}
            >
              Delete
            </Button>
          </Flex>
        );
      },
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(selectedRowKeys);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  const deleteRecord = (id: string) => {
    const newDataSource = dataSource.filter((item) => item.id !== id);
    setDataSource(newDataSource);
    localStorage.setItem("usersData", JSON.stringify(newDataSource));
  };

  const deleteRecordList = () => {
    if (!selectedRowKeys.length) return;
    const newDataSource = dataSource.filter(
      (item) => !selectedRowKeys.includes(item?.id || "")
    );
    setDataSource(newDataSource);
    localStorage.setItem("usersData", JSON.stringify(newDataSource));
    setSelectedRowKeys([]);
  };

  const getUser = () => {
    const user = localStorage.getItem("usersData");
    console.log(user);
    if (user && user.length) {
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

        <Button
          onClick={() => {
            deleteRecordList();
          }}
          style={{
            width: "20%",
            alignSelf: "flex-start",
            marginBottom: "20px",
          }}
          disabled={selectedRowKeys.length === 0}
        >
          Delete Selected
        </Button>

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
