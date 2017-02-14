var $ = require('jquery');
var CharCollection = require('../scripts/models/characters.js').CharCollection;
var charNames = require('../templates/char-names.hbs');

var character = new CharCollection();

var button = $('.load-button');


button.on('click', function(){
    character.fetch();

});

character.on('request', function(){
  $('.load-button').text('Loading');
});

character.on('sync', function(){
  character.models.forEach(function(char){
    char.get('name');
    $('.character-list').append(charNames(char));
  })

  $('.load-button').text('Submit');
});

// character.fetch();
