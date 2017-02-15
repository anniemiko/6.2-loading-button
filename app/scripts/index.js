var $ = require('jquery');
var PostCollection = require('../scripts/models/model.js').PostCollection;
var postEntry = require('../templates/post-entry.hbs');

var allPosts = new PostCollection();

var button = $('.load-button');
var submitButton = $('.submit-button');

$('form-group').append(submitButton());

button.on('click', function(){
    allPosts.fetch();

});

allPosts.on('request', function(){
  $('.load-button').text('Loading');
});

allPosts.on('sync', function(){
  allPosts.models.forEach(function(post){
    post.get('title', 'body');
    $('.posts').append(postEntry(post.toJSON()));
  })

  $('.load-button').text('Submit');
});
