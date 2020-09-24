import React, { useState } from 'react';

export default function Tab({ children }) {
  const [hightlightStyle, setHighlightStyle] = useState({
    left: 0,
    opacity: 0,
  });

  function moveHighlight(e) {
    setHighlightStyle({ left: e.nativeEvent.layerX - 150 });
  }

  function hideHighlight(e) {
    setHighlightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    });
  }

  return (
    <div className="tab" onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
      <div className="highlight" style={hightlightStyle} />
      {children}
    </div>
  );
}
