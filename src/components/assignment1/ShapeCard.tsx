// src/components/ShapeCard.tsx
import React from "react";
import { Card, Button } from "antd";
import "./index.css";

export type IShape = "left" | "up" | "down" | "right";
interface ShapeCardProps {
  shape: IShape;
  onMove?: () => void;
  onClick?: () => void;
}

const ShapeCard: React.FC<ShapeCardProps> = ({ shape, onMove }) => {
  return (
    <Card
      className="and-layout-card-content"
      style={{ width: 240, textAlign: "center" }}
    >
      <div style={{ fontSize: 0 }}>
        {shape === "left" && (
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "50px solid transparent",
              borderBottom: "50px solid transparent",
              borderRight: "100px solid gray",
            }}
          />
        )}
        {shape === "up" && (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "50px solid transparent",
              borderRight: "50px solid transparent",
              borderBottom: "100px solid gray",
            }}
          />
        )}
        {shape === "down" && (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "50px solid transparent",
              borderRight: "50px solid transparent",
              borderTop: "100px solid gray",
            }}
          />
        )}
        {shape === "right" && (
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "50px solid transparent",
              borderBottom: "50px solid transparent",
              borderLeft: "100px solid gray",
            }}
          />
        )}
      </div>
      <Button
        onClick={onMove}
        style={{
          marginTop: 16,
          backgroundColor: "#6eda78 ",
          borderRadius: "10px",
        }}
      >
        {shape === "up" || shape === "down" ? "Move position" : "Move shape"}
      </Button>
    </Card>
  );
};

export default ShapeCard;
