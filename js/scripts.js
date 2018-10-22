$(document).ready(function(event) {
    $("#formInfo").submit(function(event) {
      event.preventDefault();
      var flavors=["iceCreamOneInput","iceCreamTwoInput","iceCreamThreeInput","iceCreamFourInput"];
        flavors.forEach(function(flavor) {
          var userInput = $("select#" + flavor).val();
          $("." + flavor).text(userInput);
      });
})});
