import React from "react";
import ReadMoreArea from "@foxeian/react-read-more";

export default function ReadMore(props) {
  const { children, limit } = props;

  const buttonStyle = {
    color: "#5a1d00",         // Bootstrap primary blue
    background: "none",
    border: "none",
    cursor: "pointer",
    textDecoration:"none"
  };

  return (
    <div>
      <ReadMoreArea
        lettersLimit={limit ? limit : 600}
        buttonStyle={buttonStyle}
        expandLabel="Read More"      // Label when collapsed
        collapseLabel="Read Less"   // Label when expanded
      >
        {children}
      </ReadMoreArea>
    </div>
  );
}
