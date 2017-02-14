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

  // loading: function(){
  //   CharCollection.on('request', function(){
  //     $('.load-button').text('Loading');
  //   });
  //   CharCollection.on('sync', function(){
  //     $('.load-button').append(charNames());
  //   });
  //
  //   };

});

module.exports = {
  Char: Char,
  CharCollection: CharCollection
};
