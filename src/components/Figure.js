import React from "react";

const parts = [
  <>
    <line x1="120" y1="40" x2="280" y2="40" />
    <line x1="280" y1="40" x2="280" y2="100" />
    <line x1="120" y1="40" x2="120" y2="460" />
    <line x1="40" y1="460" x2="200" y2="460" />
  </>,
  <circle cx="280" cy="140" r="40" />,
  <line x1="280" y1="180" x2="280" y2="300" />,
  <line x1="280" y1="240" x2="240" y2="200" />,
  <line x1="280" y1="240" x2="320" y2="200" />,
  <line x1="280" y1="300" x2="240" y2="360" />,
  <line x1="280" y1="300" x2="320" y2="360" />,
];

const Figure = ({ errors }) => {
  return (
    <svg height="500" width="400" className="figure__container">
      {parts.filter((part, index) =>
        index <= errors.length ? (
          <React.Fragment key={index}>{part}</React.Fragment>
        ) : null
      )}
    </svg>
  )
};

export default Figure;
