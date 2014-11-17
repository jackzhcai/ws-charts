/**
 * Created by cai on 2014/11/13.
 */
var express = require('express');
var router = express.Router();
var async = require("async");
var mysql = require("../src/mysql.js");
var moment = require("moment");
var _ = require("underscore");

router.get("/server1", function(request, response){
    async.waterfall([
            function(callback){
                mysql.getOneDatas(function(err, oneDatas){
                    callback(err, oneDatas);
                });
            }
        ],
        function(err, oneDatas){
            var dataJson = {
                keys: [],
                values: []
            };
            _.each(oneDatas, function(item, index, list){
                dataJson.keys.push(item.key);
                dataJson.values.push(+item.value);
            });
            response.json(dataJson);
        }
    );
});

router.get("/server2", function(request, response){
    async.waterfall([
            function(callback){
                mysql.getTwoDatas(function(err, twoDatas){
                    callback(err, twoDatas);
                });
            }
        ],
        function(err, twoDatas){
            var dataJson = {
                keys: [],
                values: []
            };
            _.each(twoDatas, function(item, index, list){
                dataJson.keys.push(item.key);
                dataJson.values.push(+item.value);
            });
            response.json(dataJson);
        }
    );
});
router.get("/server3", function(request, response){
    async.waterfall([
            function(callback){
                mysql.getThreeDatas(function(err, threeDatas){
                    callback(err, threeDatas);
                });
            }
        ],
        function(err, threeDatas){
            var dataJson = {
                keys: [],
                values: []
            };
            _.each(threeDatas, function(item, index, list){
                dataJson.keys.push(item.key);
                dataJson.values.push(+item.value);
            });
            response.json(dataJson);
        }
    );
});

module.exports = router;
