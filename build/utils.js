exports.pages = function (folder = '') {
  const rootPagesFolderName = 'pages';
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const fs = require('fs');
  const path = require('path');
  const viewsFolder = path.join(
    __dirname,
    `../src/views/${rootPagesFolderName}/${folder}`
  );

  var pages = [];

  fs.readdirSync(viewsFolder).forEach((view) => {
    if (view.split('.')[1] === undefined) return false;

    const viewName = view.split('.')[0];
    const fileName =
      folder === ''
        ? `${view.replace(/\.pug/, '.html')}`
        : `${folder}/${view.replace(/\.pug/, '.html')}`;
    const options = {
      filename: fileName,
      template: `${viewsFolder}/${view}`,
      inject: true,
    };

    pages.push(new HtmlWebpackPlugin(options));
  });

  return pages;
};
