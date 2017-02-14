var Backbone = require('backbone');
var $ = require('jquery');

var Char = Backbone.Model.extend({

});

var CharCollection = Backbone.Collection.extend({
  model: Char,
  url: 'http://swapi.co/api/people/',
  parse: function(data){
    return data.results;
  }


});

module.exports = {
  Char: Char,
  CharCollection: CharCollection
};
