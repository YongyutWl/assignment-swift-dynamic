import {
  /* Card, */ Button,
  Card,
  Divider,
  Layout,
  Select,
  Typography,
} from "antd";
import { useState } from "react";
// import ShapeCard, { IShape } from "./ShapeCard";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ShapeCardCarousel, { IShapeCarousel } from "./ShapeCardCarousel";
import "./index.css";

const { Header, Content } = Layout;

const Assignment1 = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // const shapes = ["left", "up", "down", "right"] as IShape[];
  const [shapeCarousel, setShapeCarousel] = useState<IShapeCarousel[]>([
    "square",
    "circle",
    "ellipse",
    "trapezoid",
    "rectangle",
    "parallelogram",
  ]);

  const moveShape = (bySide: string) => {
    let newShapes: IShapeCarousel[] = [];

    // const check = shapes[index];

    const tmpShapes = [...shapeCarousel];

    const firstElement = tmpShapes[0];
    const lastElement = tmpShapes[tmpShapes.length - 1];

    if (bySide === "left") {
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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography.Title level={3}>{`${t(
          "Layout & Style"
        )}`}</Typography.Title>
        <div style={{ alignItems: "center" }}>
          <Select
            defaultValue={i18n.language}
            style={{ width: 120 }}
            onChange={handleChangeLanguage}
            options={[
              { value: "en", label: "English" },
              { value: "th", label: "Thai" },
            ]}
          />
          <Button onClick={() => navigate("/")}>Home</Button>
        </div>
      </Header>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Row
          gutter={8}
          style={{
            margin: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
          }}
        >
          <Col span={6} style={{ alignContent: "center" }}>
            <Card
              className="and-layout-card-content"
              style={{
                width: "100%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => moveShape("left")}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "50px solid transparent",
                  borderBottom: "50px solid transparent",
                  borderRight: "100px solid gray",
                }}
              />
              <Button
                // onClick={onMove}
                style={{
                  // marginTop: 16,
                  backgroundColor: "#6eda78 ",
                  position: "relative",
                  borderRadius: "10px",
                  top: "40px",
                }}
              >
                {t("Move shape")}
              </Button>
            </Card>
          </Col>
          <Col
            span={12}
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Card
              className="and-layout-card-content"
              style={{ width: "100%", alignItems: "center" }}
              onClick={() => movePosition()}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignContent: "center",
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "50px solid transparent",
                    borderRight: "50px solid transparent",
                    borderBottom: "100px solid gray",
                  }}
                />
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "50px solid transparent",
                    borderRight: "50px solid transparent",
                    borderTop: "100px solid gray",
                  }}
                />
              </div>
              <Button
                // onClick={onMove}
                style={{
                  // marginTop: 16,
                  backgroundColor: "#6eda78 ",
                  position: "relative",
                  borderRadius: "10px",
                  top: "40px",
                }}
              >
                {t("Move Position")}
              </Button>
            </Card>
          </Col>

          <Col span={6} style={{ alignContent: "center" }}>
            <Card
              className="and-layout-card-content"
              style={{
                width: "100%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => moveShape("right")}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "50px solid transparent",
                  borderBottom: "50px solid transparent",
                  borderLeft: "100px solid gray",
                }}
              />
              <Button
                // onClick={onMove}
                style={{
                  // marginTop: 16,
                  backgroundColor: "#6eda78 ",
                  position: "relative",
                  borderRadius: "10px",
                  top: "40px",
                }}
              >
                {t("Move shape")}
              </Button>
            </Card>
          </Col>
        </Row>
        {/* <Row gutter={8}>
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
        </Row> */}
        <Divider />

        <Row
          style={{
            alignItems: "center",
            width: "70%",
          }}
          gutter={16}
          justify="end"
        >
          {shapeCarousel.map((shape, index) => (
            <Col span={6} key={index} offset={1}>
              <ShapeCardCarousel
                key={index}
                shape={shape}
                onClick={() => {
                  const tmpShapes = [...shapeCarousel].sort(
                    () => Math.random() - 0.5
                  );
                  setShapeCarousel(tmpShapes);
                }}
              />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default Assignment1;
