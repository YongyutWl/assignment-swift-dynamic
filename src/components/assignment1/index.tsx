import { /* Card, */ Button, Divider, Layout, Typography } from "antd";
import { useState } from "react";
import ShapeCard, { IShape } from "./ShapeCard";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ShapeCardCarousel, { IShapeCarousel } from "./ShapeCardCarousel";

const { Header, Content } = Layout;

const Assignment1 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const shapes = ["left", "up", "down", "right"] as IShape[];
  const [shapeCarousel, setShapeCarousel] = useState<IShapeCarousel[]>([
    "square",
    "circle",
    "ellipse",
    "trapezoid",
    "rectangle",
    "parallelogram",
  ]);

  const moveShape = (index: number) => {
    let newShapes: IShapeCarousel[] = [];

    const check = shapes[index];
    const tmpShapes = [...shapeCarousel];

    const firstElement = tmpShapes[0];
    const lastElement = tmpShapes[tmpShapes.length - 1];

    if (check === "left") {
      newShapes = [...tmpShapes.splice(1), firstElement];
    } else {
      newShapes = [lastElement, ...tmpShapes.splice(0, tmpShapes.length - 1)];
    }

    setShapeCarousel(newShapes);
  };

  const movePosition = () => {
    let newShapes: IShapeCarousel[] = [];

    const tmpShapes = [...shapeCarousel];

    const firstHaftElement = [...tmpShapes.slice(0, tmpShapes.length / 2)];
    const lastHaftElement = [...tmpShapes.slice(tmpShapes.length / 2)];

    newShapes = [...lastHaftElement, ...firstHaftElement];

    setShapeCarousel(newShapes);
  };
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
        <Typography.Title level={3}>{`${t(
          "Layout & Style"
        )}`}</Typography.Title>
        <Button onClick={() => navigate("/")}>Home</Button>
      </Header>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Row gutter={8}>
          {shapes.map((shape, index) => (
            <Col span={6} key={index}>
              <ShapeCard
                key={index}
                shape={shape}
                onClick={() => {}}
                onMove={() => {
                  if (shape === "up" || shape === "down") {
                    movePosition();
                  } else {
                    moveShape(index);
                  }
                }}
              />
            </Col>
          ))}
        </Row>
        <Divider />

        <Row>
          {shapeCarousel.map((shape, index) => (
            <Col
              span={8}
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ShapeCardCarousel key={index} shape={shape} onClick={() => {}} />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default Assignment1;
