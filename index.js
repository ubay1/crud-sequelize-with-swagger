/* eslint-disable no-unused-vars */
const express = require('express');
const cors = require('cors');
const rootDir = process.cwd();

const dotenv = require("dotenv"); 
dotenv.config();

var SwaggerExpress = require('swagger-express-mw');
const app = express();

var config = {
  appRoot: __dirname // required config
};

// For Swagger UI Express
const jsyaml    = require('js-yaml');
const path      = require("path");
const fs        = require('fs');
const swaggerUi = require('swagger-ui-express');
// Read Swagger-API-Spec as YAML and convert it to a JavaScript object:
const swaggerSpec = jsyaml.safeLoad(fs.readFileSync(path.join(__dirname, './api/swagger/swagger.yaml'), 'utf8'));

// Initialize sequelize and swagger-sequelize:
const swaggerSequelize = require("./api/models/swaggerSequelize");

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  // For Swagger UI Express
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // const routes = require('./api/routes/index');
  // app.use('/api', routes);
  
  app.use(cors());
  
  // limit 50mb, kalo gak di set akan error kalo data api yang dikirim besar.
  app.use(express.json({
    limit: '50mb'
  }));
  app.use(express.urlencoded({
    limit: '50mb',
    extended: true
  }));

  var port = process.env.PORT || 10010;
  app.listen(port);

  console.log('Server fired up on http://localhost:' + port);
  console.log("===================================================");
});

// const PORT = 8000;


// const server = app.listen(PORT, () => {
//   console.log(`Server is listening to port ${PORT}`)
// })