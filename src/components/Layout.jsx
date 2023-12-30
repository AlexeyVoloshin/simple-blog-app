import React from 'react';

export const Layout = ({ children }) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>My SSR App</title>
        <link
          rel="stylesheet"
          href="src/styles.css"></link>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
};
