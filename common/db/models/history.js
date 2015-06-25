/*
 * 历史数据 model
 * 
*/
var mongodb = require('../connect');
var Schema = mongodb.mongoose.Schema;
var Promise = require('es6-promise').Promise;

var HistorySchema = new Schema({
    id   : String,
    title: String,
    image: String,
    theme: String,
    dtime: String
});

var HistoryDAO = function(){};
var History = mongodb.mongoose.model('History', HistorySchema);

HistoryDAO.prototype =  {

    constructor: HistoryDAO,
    save: function(obj){
        return new Promise(function(resolve, reject){
            var instance = new History(obj);
            instance.save(function(err){
                resolve && resolve(err);
            });
        });
    }
    
};

module.exports = HistoryDAO;