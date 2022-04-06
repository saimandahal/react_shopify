import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

const mountComponent = (selector, Component) => {
  const container = document.querySelector(selector);

  if (container) {
    const root = ReactDOMClient.createRoot(container);

    return root.render(<Component />);
  } else {
    console.error(`Unable to find a selector named ${selector}`);
    return false;
  }
};

export default mountComponent;
