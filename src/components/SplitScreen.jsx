import React from "react";

const SplitScreen = ({ children, leftWeight, rightWeight }) => {
  const [left, right] = children;

  const leftWidth = `${leftWeight}rem`;
  const rightWidth = `${rightWeight}rem`;
  return (
    <section className="flex h-screen">
      <div style={{ width: leftWidth }}>{left}</div>
      <div style={{ width: rightWidth }}>{right}</div>
    </section>
  );
};

export default SplitScreen;
