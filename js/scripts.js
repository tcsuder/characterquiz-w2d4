$(document).ready(function(){
  $("button#submitbtn").click(function(event){


    var wealth = $('input[name="wealthy-or-poor"]:checked').val();
    var honesty = $('input[name="dis-or-honest"]:checked').val();
    var closeness = $('input[name="close-or-distant"]:checked').val();


    if (wealth === "wealthy") {
      if (closeness === "close") {
      $("div#Jordan").show();
      } else if (closeness === "distant") {
        $("div#Gatsby").show();
      }
    } else if (honesty === "dishonest") {
          $("div#Myrtle").show();
      } else if (honesty === "honest"){
        $("div#Nick").show();
    }

  event.preventDefault();
  });
});
