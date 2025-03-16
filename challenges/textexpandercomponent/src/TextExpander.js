import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "./Button";

export function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapsedButtonText = "Show less",
  buttonColor = "blue",
  className = "",
  expanded = false,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const textWordArray = children ? children.split(/\s+/) : [];
  const displayText = isExpanded
    ? children
    : `${textWordArray.slice(0, collapsedNumWords).join(" ")}...`;
  const buttonText = isExpanded ? collapsedButtonText : expandButtonText;

  return (
    <div className={className}>
      <span>{displayText}</span>
      <Button color={buttonColor} onClick={() => setIsExpanded((exp) => !exp)}>
        {buttonText}
      </Button>
    </div>
  );
}

TextExpander.propTypes = {
  className: PropTypes.string,
  collapsedNumWords: PropTypes.number,
  collapsedButtonText: PropTypes.string,
  expandButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  expanded: PropTypes.bool,
};
