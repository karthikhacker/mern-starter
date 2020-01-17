//Server file
const express = require('express');
const bodyParser = require('body-parser');
const morgn = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const chalk = require('chalk');
const port = process.env.PORT || 5000;
const app = express();
//server
app.listen(port,() => {
  console.log(chalk.magentaBright('App running at port ',port));
})
