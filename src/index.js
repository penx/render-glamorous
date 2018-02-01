import ReactDOMServer from "react-dom/server";

import { renderStatic } from "glamor/server";

const renderGlamor = component => {
  const { html, css } = renderStatic(() =>
    ReactDOMServer.renderToString(component)
  );

  return `
  <style>${css}</style>
  ${html}
  `;
};

export renderGlamor;
