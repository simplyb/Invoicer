var Helpers = {
  //capitalizes each 
  titleize: function(str) {
    var words = str.split(" ");
    for( var i = 0; i < words.length; i++ ){
      words[i] = this.capitalize(words[i]);
    }
    return words.join(' ');
  },
  
  capitalize: function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};