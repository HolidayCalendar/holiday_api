var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var index = require('./routes/index');
app.use('/', index);

// adding routes
const router = express.Router();
// var users = require('./routes/uers');
// router.use('/users(.json)?', users);
var samples = require('./routes/sample');
router.use('/samples(.json)?', samples);

var employees = require('./routes/employee');
router.use('/employees(.json)?', employees);

var holidays = require('./routes/holiday');
router.use('/holidays(.json)?', holidays);

var holidaysLimit = require('./routes/holidayLimit');
router.use('/holidaysLimit(.json)?', holidaysLimit);

app.use('/api', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  // next(err);
  res.json({
    error: 'Unrecognized endpoint'
  })
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
