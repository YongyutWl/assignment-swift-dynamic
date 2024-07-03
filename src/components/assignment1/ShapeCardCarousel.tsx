import React from "react";
import { Card } from "antd";
import "./index.css";

export interface ShapeCardCarouselProps {
  shape: IShapeCarousel;
  onClick?: () => void;
}

export type IShapeCarousel =
  | "square"
  | "circle"
  | "ellipse"
  | "trapezoid"
  | "rectangle"
  | "parallelogram";

const ShapeCardCarousel: React.FC<ShapeCardCarouselProps> = ({
  shape,
  onClick,
}) => {
  const renderShape = () => {
    switch (shape) {
      case "square":
        return (
          <div
            style={{ width: 100, height: 100 }}
            className="shape-card"
          />
        );
      case "circle":
        return (
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
            }}
            className="shape-card"
          />
        );
      case "ellipse":
        return (
          <div
            style={{
              width: 250,
              height: 100,
              borderRadius: "50%",
            }}
            className="shape-card"
          />
        );
      case "trapezoid":
        return (
          <div
            style={{
              width: 250,
              height: 100,

              clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
            }}
            className="shape-card"
          />
        );
      case "rectangle":
        return (
          <div
            style={{
              width: 250,
              height: 100,
              clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            }}
            className="shape-card"
          />
        );
      case "parallelogram":
        return (
          <div
            style={{
              width: 250,
              height: 100,
              clipPath: "polygon(0 0, 75% 0, 100% 100%, 25% 100%)",
            }}
            className="shape-card"
          />
        );
      default:
        return null;
    }
  };

  return (
    <Card
      style={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        width: "100%",
        textAlign: "center",
        margin: "10px",
      }}
      onClick={onClick}
      className="and-layout-card-content2"
    >
      {renderShape()}
    </Card>
  );
};

export default ShapeCardCarousel;
