/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Radio,
  Row,
  Col,
  InputNumber,
} from "antd";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { setUser } from "../../features/users/userSlice";
import { useTranslation } from "react-i18next";


const { Option } = Select;

const FormAndTable = () => {
  const [form] = Form.useForm();
  const { t,  } = useTranslation();

  const dispatch = useAppDispatch();

  const userData = useAppSelector((state) => state?.user);

  const onFinish = (values: any) => {
    const data = JSON.parse(localStorage.getItem("usersData") || "[]");

    let newData = [...data];

    if (!values.id) {
      newData = [...data, { ...values, id: uuidv4() }];
      localStorage.setItem("usersData", JSON.stringify(newData));
    } else {
      const index = data.findIndex((item: any) => item.id === values.id);
      data[index] = values;
      localStorage.setItem("usersData", JSON.stringify(data));
    }

    form.resetFields();

    dispatch(setUser(null));

    window.location.reload();
  };

  useEffect(() => {
    if (userData) {
      form.setFieldsValue({
        ...userData,
        birthday: userData?.birthday ? dayjs(userData?.birthday) : null,
      });
    }
  }, [form, userData]);
  return (
    <React.Fragment>
      <Row style={{ marginBottom: "20px" }}>
        <Form
          form={form}
          layout="horizontal"
          onFinish={onFinish}
          initialValues={{
            title: null,
            firstname: null,
            lastname: null,
            birthday: null,
            nationality: null,
            citizenID: null,
            gender: null,
            mobilePhone: null,
            passportNo: null,
            expectedSalary: null,
            id: null,
          }}
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
            borderRadius: "8px",
            border: "solid black 1px",
          }}
        >
          <Row>
            <Col span={6}>
              <Form.Item
                label={t("Title")}
                name="title"
                rules={[
                  { required: true, message: "Please select your title!" },
                ]}
              >
                <Select placeholder="Title">
                  <Option value="Mr">Mr</Option>
                  <Option value="Mrs">Mrs</Option>
                  <Option value="Ms">Ms</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item
                label={t("Firstname")}
                name="firstname"
                rules={[
                  { required: true, message: "Please enter your firstname!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={t("Lastname")}
                name="lastname"
                rules={[
                  { required: true, message: "Please enter your lastname!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label={t('Birthday')}
                name="birthday"
                rules={[
                  { required: true, message: "Please select your birthday!" },
                ]}
              >
                <DatePicker format="MM/DD/YYYY" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={t("Nationality")}
                name="nationality"
                rules={[
                  {
                    required: true,
                    message: "Please select your nationality!",
                  },
                ]}
              >
                <Select placeholder="Please Select">
                  <Option value="American">American</Option>
                  <Option value="Canadian">Canadian</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label={t("CitizenID")}
                name="citizenID"
                rules={[
                  { required: true, message: "Please enter your CitizenID!" },
                ]}
              >
                <Input.OTP length={13}></Input.OTP>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label={t("Gender")}
            name="gender"
            rules={[{ required: true, message: "Please select your gender!" }]}
          >
            <Radio.Group>
              <Radio value="male">{t("Male")}</Radio>
              <Radio value="female">{t("Female")}</Radio>
              <Radio value="unsex">{t("Unsex")}</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label={t("Mobile Phone")}
            name="mobilePhone"
            rules={[
              {
                required: true,
                message: "Please enter your mobile phone number!",
              },
            ]}
          >
            <InputNumber controls={false} addonBefore="(+66)" />
          </Form.Item>

          <Form.Item label={t("Passport No")} name="passportNo">
            <Input />
          </Form.Item>

          <Form.Item label={t("Expected Salary")} name="expectedSalary">
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              style={{ marginLeft: "10px" }}
              onClick={() => {
                form.resetFields();
                dispatch(setUser(null));
              }}
            >
              Reset
            </Button>
          </Form.Item>
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>
        </Form>
      </Row>
    </React.Fragment>
  );
};

export default FormAndTable;
