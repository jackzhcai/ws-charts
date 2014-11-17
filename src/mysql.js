/**
 * Created by cai on 2014/11/13.
 */
var mysql = require("mysql");
var constants = require("./constants");
var connection = mysql.createConnection(constants.mysql);

connection.connect(function(err){
    if(err){
        console.error("error connect: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

var getOneDatas = function(callback){
    connection.query('SELECT * from server1', function(err, results){
        callback(err, results);
    });
};

var getTwoDatas = function(callback){
    connection.query('SELECT * from server2', function(err, results){
        callback(err, results);
    });
};

var getThreeDatas = function(callback){
    connection.query('SELECT * from server3', function(err, results){
        callback(err, results);
    });
}

exports.getOneDatas = getOneDatas;
exports.getTwoDatas = getTwoDatas;
exports.getThreeDatas = getThreeDatas;


