var Backbone = require('backbone');
var $ = require('jquery');

var Post = Backbone.Model.extend({
  '_id':''
});

var PostCollection = Backbone.Collection.extend({
  model: Post,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/posts',
  parse: function(data){
    return data.results;
  }


});

module.exports = {
  Post: Post,
  PostCollection: PostCollection
};
