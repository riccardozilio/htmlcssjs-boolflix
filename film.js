// HANDLEBARS serch film

function printText(title, originalTitle, originalLanguage, graduation){
  var flag = addFleg(originalLanguage);
  var templateItem = {
    title: title,
    originalTitle: originalTitle,
    originalLanguage: flag,
    graduation:  graduation,
    star: addStar(graduation)
  }

  var itemText = $(".serched__film");
  var template = $("#film__template").html();
  var compiled = Handlebars.compile(template);
  var textFilm = compiled(templateItem);
  itemText.append(textFilm);
}


// ajax per la ricerca film


function ajaxFilm(title){
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
      for (var i =0; i < 8 ; i++) {
        var res = ress[i];
        var title = res.title;
        var originalTitle = res.original_title;
        var language =  res.original_language;
        var vote =  res.vote_average;
        var date = res.release_date;
        var round = roundNumber(vote);
        printText(title, originalTitle, language, round);

      }
    }
  })
}


// HANDLEBARS serch serie

function printTextSeries(title, originalTitle, originalLanguage, graduation){
  var flag = addFleg(originalLanguage);
  var templateItem = {
    title: title,
    originalTitle: originalTitle,
    originalLanguage: flag,
    graduation:  graduation,
    star: addStar(graduation)
  }

  var itemText = $(".serched__series");
  var template = $("#film__template").html();
  var compiled = Handlebars.compile(template);
  var textFilm = compiled(templateItem);
  itemText.append(textFilm);
}

// ajax per la ricerca serietv


function ajaxSeries(title){
  var dataout ={
    api_key: "ef19f025849e34c73791406b46789e39",
    language: "it-IT",
    query: title
  }
  $.ajax ({
    url: "https://api.themoviedb.org/3/search/tv",
    method: "GET",
    data: dataout,
    success: function(data){
      var ress = data.results;
      for (var i =0; i < 8 ; i++) {
        var res = ress[i];
        var title = res.name;
        var originalTitle = res.original_name;
        var language =  res.original_language;
        var vote =  res.vote_average;
        var date = res.release_date;
        var round = roundNumber(vote);
        printTextSeries(title, originalTitle, language, round);

      }
    }
  })
}


// HANDLEBARS top serie

function printTextTopSeries(title, originalTitle, originalLanguage, graduation){
  var flag = addFleg(originalLanguage);
  var templateItem = {
    title: title,
    originalTitle: originalTitle,
    originalLanguage: flag,
    graduation:  graduation,
    star: addStar(graduation)
  }

  var itemText = $(".new__series");
  var template = $("#film__template").html();
  var compiled = Handlebars.compile(template);
  var textFilm = compiled(templateItem);
  itemText.append(textFilm);
}



function ajaxTopSeries(){
  var dataout ={
    api_key: "ef19f025849e34c73791406b46789e39",
    language: "it-IT",
  }
  $.ajax ({
    url: "https://api.themoviedb.org/3/trending/tv/week",
    method: "GET",
    data: dataout,
    success: function(data){
      var ress = data.results;
      for (var i =0; i < 8 ; i++) {
        var res = ress[i];
        var title = res.name;
        var originalTitle = res.original_name;
        var language =  res.original_language;
        var vote =  res.vote_average;
        var date = res.release_date;
        var round = roundNumber(vote);
        printTextTopSeries(title, originalTitle, language, round);

      }
    }
  })
}




function addFleg(language){
  str = "";
  if (language == "en") {
    str = '<img src="img/flag/en.svg" alt="" class="flag">';
    return str;
  }
  if (language == "it") {
    str = '<img src="img/flag/it.svg" alt="" class="flag">';
    return str;
  }
  if (language == "ja") {
    str = '<img src="img/flag/jp.svg" alt="" class="flag">';
    return str;
  }else {
    str = '<img src="img/flag/anonimous.svg" alt="" class="flag">';
  }
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




function ajaxTopFilm(){
  var dataout ={
    api_key: "ef19f025849e34c73791406b46789e39",
    language: "it-IT",
  }
  $.ajax ({
    url: "https://api.themoviedb.org/3/trending/movie/week",
    method: "GET",
    data: dataout,
    success: function(data){
      var ress = data.results;
      for (var i =0; i < 8 ; i++) {
        var res = ress[i];
        var title = res.title;
        var originalTitle = res.original_title;
        var language =  res.original_language;
        var vote =  res.vote_average;
        var date = res.release_date;
        var round = roundNumber(vote);
        printTopFilm(title, originalTitle, language, round);

      }
    }
  })
}


// HANDLEBARS new film

function printTopFilm(title, originalTitle, originalLanguage, graduation){
  var flag = addFleg(originalLanguage);
  var templateItem = {
    title: title,
    originalTitle: originalTitle,
    originalLanguage: flag,
    graduation:  graduation,
    star: addStar(graduation)
  }

  var itemText = $(".new__film");
  var template = $("#film__template").html();
  var compiled = Handlebars.compile(template);
  var textFilm = compiled(templateItem);
  itemText.append(textFilm);
}


function roundNumber(vote){
  var votefive = (vote/2);
  round = Math.floor(votefive);
  return round;
}



function serchResults(){
  ajaxTopFilm();
  ajaxTopSeries();

  $(".input__text").keyup(function(event){
   if (event.which == 13) {
     removeSerch();
     var messaggio = $(this).val();
     console.log(messaggio);
     ajaxFilm(messaggio);
     ajaxSeries(messaggio);
     ajaxTopFilm();
     ajaxTopSeries();
   }
 })
}


function init(){
   serchResults()



}
$(document).ready(init)
