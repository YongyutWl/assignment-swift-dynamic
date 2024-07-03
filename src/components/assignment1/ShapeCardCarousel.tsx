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
    const shapes = {
      square: { width: 100, height: 100 },
      circle: { width: 100, height: 100, borderRadius: "50%" },
      ellipse: { width: 250, height: 100, borderRadius: "50%" },
      trapezoid: {
        width: 250,
        height: 100,
        clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
      },
      rectangle: {
        width: 250,
        height: 100,
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      },
      parallelogram: {
        width: 250,
        height: 100,
        clipPath: "polygon(0 0, 75% 0, 100% 100%, 25% 100%)",
      },
    };

    return <div style={shapes[shape]} className="shape-card" />;
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

