import React, { useState, useCallback } from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal"
};

const Link = ({ page, children }) => {
  const [style, setStyle] = useState(STATUS.HOVERED);

  const onMouseEnter = useCallback(() => {
    setStyle(STATUS.HOVERED);
  }, []);

  const onMouseLeave = useCallback(() => {
    setStyle(STATUS.NORMAL);
  }, []);

  return (
    <a
      className={style}
      href={page || "#"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};

export default Link;
