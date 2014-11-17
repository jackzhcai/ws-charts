/**
 * Created by cai on 2014/11/13.
 */
var mode = process.argv[2] || process.env['node_mode'] || 'daily';
module.exports = require('../config/'+mode);