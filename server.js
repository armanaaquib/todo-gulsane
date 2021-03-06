const {app} = require('./lib/routes.js');
const port = process.argv[2] || 4000;

const main = port => {
  app.listen(port, () => process.stdout.write(`listening at port ${port}`));
};

main(port);
