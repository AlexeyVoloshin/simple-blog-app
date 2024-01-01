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
        <title>Blog</title>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
};
