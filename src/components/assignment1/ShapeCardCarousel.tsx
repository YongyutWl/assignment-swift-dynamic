// src/components/ShapeCard.tsx
import React from "react";
import { Card } from "antd";

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
          <div style={{ width: 100, height: 100, backgroundColor: "gray" }} />
        );
      case "circle":
        return (
          <div
            style={{
              width: 100,
              height: 100,
              backgroundColor: "gray",
              borderRadius: "50%",
            }}
          />
        );
      case "ellipse":
        return (
          <div
            style={{
              width: 150,
              height: 80,
              backgroundColor: "gray",
              borderRadius: "50%",
            }}
          />
        );
      case "trapezoid":
        return (
          <div
            style={{
              width: 0,
              height: 0,
              borderBottom: "50px solid gray",
              borderLeft: "25px solid transparent",
              borderRight: "25px solid transparent",
              borderTop: "50px solid transparent",
            }}
          />
        );
      case "rectangle":
        return (
          <div style={{ width: 150, height: 100, backgroundColor: "gray" }} />
        );
      case "parallelogram":
        return (
          <div
            style={{
              width: 150,
              height: 100,
              backgroundColor: "gray",
              transform: "skew(20deg)",
            }}
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
        width: 240,
        textAlign: "center",
        margin: "10px",
      }}
      onClick={onClick}
    >
      {renderShape()}
    </Card>
  );
};

export default ShapeCardCarousel;
