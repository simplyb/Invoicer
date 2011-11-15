describe("Helpers", function() {
  
  beforeEach(function () {
      str = "this is a string";
  });
  
  describe("titleize", function() {
  
    it("it should capitalize each word in a string", function() {
      var words = Helpers.titleize(str).split(" ");
      for(var i=0; i<words.length; i++){
        expect(words[i].charAt(0)).toEqual(words[i].charAt(0).toUpperCase());
      }
    });
    
  });
  
  describe("capitalize", function() {
  
    it("it should capitalize the first word in a string", function() {
      var words = Helpers.capitalize(str).split(" ");
      
      //first character of first word should be uppercase - This
      expect(words[0].charAt(0)).toEqual(words[0].charAt(0).toUpperCase());
      
      //first character of second word should be lower case - is
      expect(words[1].charAt(0)).not.toEqual(words[1].charAt(0).toUpperCase());
    });
    
  });
});