function printText(title, originalTitle, originalLanguage, graduation){

  var templateItem = {
    title: title,
    originalTitle: originalTitle,
    originalLanguage: originalLanguage,
    graduation:  graduation,
    star: addStar(graduation)

  }
  console.log(graduation);



  var itemText = $(".serched__result");
  var template = $("#film__template").html();
  var compiled = Handlebars.compile(template);
  var textFilm = compiled(templateItem);
  itemText.append(textFilm);


}

function addStar(graduation){
  var str = ""
  for (var i = 0; i < 5; i++) {
    if (graduation > i) {
    str +='<i class="fas fa-star yellow"></i>';
    }else {
      str +='<i class="far fa-star"></i>';
    }
  }
  return str;

}


function removeSerch(){
  var clear = $(".container__item");
  clear.remove();

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
      for (var i =0; i < ress.length ; i++) {
        var res = ress[i];
        var title = res.title;
        var originalTitle = res.original_title;
        var language =  res.original_language;
        var vote =  res.vote_average;
        var date = res.release_date;
        var round = roundNumber(vote);
        printText(title, originalTitle, language, round);
        // addStar(round);
      }
    }
  })
}

function roundNumber(vote){
  var votefive = (vote/2);
  round = Math.floor(votefive);
  return round;
}

function serchResults(){
  $(".input__text").keyup(function(event){
   if (event.which == 13) {
     removeSerch();
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
