function printText(titolo, titolooriginale, lingua, voto){
  var templateItem = {
    title: title,
    originalTitle: originalTitle,
    originalLanguage: language,
    graduation: vote
  }

  var itemText = $(".serched__result");
  var template = $("#film__template").html();
  var compiled = Handlebars.compile(template);
  var textFilm = compiled(templateItem);
  itemText.append(textFilm);

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
        printText(title, originalTitle, language, vote);

    }
  })
}



function init(){
 ajaxTest("back in the future");

}
$(document).ready(init)
