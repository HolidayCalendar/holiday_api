var Holiday = require('../models/holiday');

// Display list of all Holidays
exports.holidays_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Holidays list');
};

// Display detail page for a specific Holiday
exports.holiday_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Holiday detail: ' + req.params.id);
};

// Display Holiday create form on GET
exports.holiday_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Holiday create GET');
};

// Handle Holiday create on POST
exports.holiday_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Holiday create POST');
};

// Display Holiday delete form on GET
exports.holiday_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Holiday delete GET');
};

// Handle Holiday delete on POST
exports.holiday_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Holiday delete POST');
};

// Display Holiday update form on GET
exports.holiday_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Holiday update GET');
};

// Handle Holiday update on POST
exports.holiday_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Holiday update POST');
};
