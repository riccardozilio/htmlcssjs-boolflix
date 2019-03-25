function printText(title, originalTitle, originalLanguage, graduation){
  var templateItem = {
    title: title,
    originalTitle: originalTitle,
    originalLanguage: originalLanguage,
    graduation:  graduation
  }
  console.log(graduation);

  addStar(graduation);

  var itemText = $(".serched__result");
  var template = $("#film__template").html();
  var compiled = Handlebars.compile(template);
  var textFilm = compiled(templateItem);
  itemText.append(textFilm);

}

function addStar(vote){
  if (vote < 5 & vote > 4) {
    $(".star5").addClass("hidden");
  }
  if (vote < 4 & vote >3) {
    $(".star4").addClass("hidden");
    $(".star5").addClass("hidden");
  }
  if (vote < 3 & vote>2) {
    $(".star3").addClass("hidden");
    $(".star4").addClass("hidden");
    $(".star5").addClass("hidden");
  }
  if (vote < 2 & vote>1) {
    $(".star2").addClass("hidden");
    $(".star3").addClass("hidden");
    $(".star4").addClass("hidden");
    $(".star5").addClass("hidden");
  }
}





function ajaxTest(title){
  var dataout ={
    api_key: "ef19f025849e34c73791406b46789e39",
    language: "it-IT",
    query: title
  }
  $.ajax ({
    url: "https://api.themoviedb.org/3/search/movie",
    method: "GET",
    data: dataout,
    success: function(data){
      var ress = data.results;
      for (var i = 0; i < ress.length; i++) {
        var res = ress[i];
        var title = res.title;
        var originalTitle = res.original_title;
        var language =  res.original_language;
        var vote =  res.vote_average;
        var date = res.release_date;
        var vote5 = (vote*5)/10;
        printText(title, originalTitle, language, vote5);
      }
    }
  })
}
function serchResults(){
  $(".input__text").keyup(function(event){
   if (event.which == 13) {

     var messaggio = $(this).val();
     console.log(messaggio);
     ajaxTest(messaggio);
   }
 })
}


function init(){
   serchResults()


}
$(document).ready(init)
