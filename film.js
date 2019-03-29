// HANDLEBARS serch film

function printText(title, originalTitle, originalLanguage, graduation, img, id, type){
  var flag = addFleg(originalLanguage);
  var templateItem = {
    title: title,
    originalTitle: originalTitle,
    originalLanguage: flag,
    graduation:  graduation,
    star: addStar(graduation),
    posterimg:img,
    id:id,
    type:type
  }

  var itemText = $(".serched__film");
  var template = $("#film__template").html();
  var compiled = Handlebars.compile(template);
  var textFilm = compiled(templateItem);
  itemText.append(textFilm);
}


// ajax per la ricerca film


function ajaxFilm(title, min, max){
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
      for (var i =min; i < max && i< ress.length ; i++) {
        var res = ress[i];
        var title = res.title;
        var originalTitle = res.original_title;
        var language =  res.original_language;
        var vote =  res.vote_average;
        var date = res.release_date;
        var id = res.id;
        var type = "movie";
        var round = roundNumber(vote);
        if (res.poster_path == null) {
          var posterimg = "img/image_not_found.jpg"
        }else {
          posterimg = "https://image.tmdb.org/t/p/w300" + res.poster_path;
        }
        printText(title, originalTitle, language, round, posterimg, id, type);

      }
    }
  })
}


// HANDLEBARS serch serie

function printTextSeries(title, originalTitle, originalLanguage, graduation, img, id, type){
  var flag = addFleg(originalLanguage);
  var templateItem = {
    title: title,
    originalTitle: originalTitle,
    originalLanguage: flag,
    graduation:  graduation,
    star: addStar(graduation),
    posterimg:img,
    id:id,
    type:type
  }

  var itemText = $(".serched__series");
  var template = $("#film__template").html();
  var compiled = Handlebars.compile(template);
  var textFilm = compiled(templateItem);
  itemText.append(textFilm);
}

// ajax per la ricerca serietv


function ajaxSeries(title, min, max){
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
      for (var i =min; i < max && i< ress.length; i++) {
        var res = ress[i];
        var title = res.name;
        var originalTitle = res.original_name;
        var language =  res.original_language;
        var vote =  res.vote_average;
        var date = res.release_date;
        var id = res.id;
        var type = "tv";
        var round = roundNumber(vote);
        if (res.poster_path == null) {
          var posterimg = "img/image_not_found.jpg"
        }else {
          posterimg = "https://image.tmdb.org/t/p/w300" + res.poster_path;
        }
        printTextSeries(title, originalTitle, language, round, posterimg, id, type);

      }
    }
  })
}


// HANDLEBARS top serie

function printTextTopSeries(title, originalTitle, originalLanguage, graduation, img, id, type){
  var flag = addFleg(originalLanguage);
  var templateItem = {
    title: title,
    originalTitle: originalTitle,
    originalLanguage: flag,
    graduation:  graduation,
    star: addStar(graduation),
    posterimg:img,
    id:id,
    type:type
  }

  var itemText = $(".new__series");
  var template = $("#film__template").html();
  var compiled = Handlebars.compile(template);
  var textFilm = compiled(templateItem);
  itemText.append(textFilm);
}



function ajaxTopSeries(min, max){
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
      for (var i =min; i < max ; i++) {
        var res = ress[i];
        var title = res.name;
        var originalTitle = res.original_name;
        var language =  res.original_language;
        var vote =  res.vote_average;
        var date = res.release_date;
        var id = res.id;
        var type = "tv";
        var round = roundNumber(vote);
        if (res.poster_path == null) {
          var posterimg = "img/image_not_found.jpg"
        }else {
          posterimg = "https://image.tmdb.org/t/p/w300" + res.poster_path;
        }
        printTextTopSeries(title, originalTitle, language, round, posterimg, id, type);

      }
    }
  })
}


function printTextTopActor(title, img){

  var templateItem = {
    title: title,
    posterimg:img
  }

  var itemText = $(".top__actors");
  var template = $("#film__template").html();
  var compiled = Handlebars.compile(template);
  var textFilm = compiled(templateItem);
  itemText.append(textFilm);
}



function ajaxTopActor(min, max){
  var dataout ={
    api_key: "ef19f025849e34c73791406b46789e39",
    language: "it-IT",
  }
  $.ajax ({
    url: "https://api.themoviedb.org/3/trending/person/week",
    method: "GET",
    data: dataout,
    success: function(data){
      var ress = data.results;
      for (var i =min; i < max ; i++) {
        var res = ress[i];
        var title = res.name;
        if (res.profile_path == null) {
          var posterimg = "img/image_not_found.jpg"
        }else {
          posterimg = "https://image.tmdb.org/t/p/w300" + res.profile_path;
        }
        printTextTopActor(title, posterimg);

      }
    }
  })
}




// ajax top film


function ajaxTopFilm(min, max){
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
      for (var i =min; i < max ; i++) {
        var res = ress[i];
        var title = res.title;
        var originalTitle = res.original_title;
        var language =  res.original_language;
        var vote =  res.vote_average;
        var date = res.release_date;
        var id = res.id;
        var type = "movie";
        var round = roundNumber(vote);
        if (res.poster_path == null) {
          var posterimg = "img/image_not_found.jpg"
        }else {
          posterimg = "https://image.tmdb.org/t/p/w300" + res.poster_path;
        }
        printTopFilm(title, originalTitle, language, round, posterimg, id, type);

      }
    }
  })
}


// HANDLEBARS new film

function printTopFilm(title, originalTitle, originalLanguage, graduation, img, id, type){
  var flag = addFleg(originalLanguage);
  var templateItem = {
    title: title,
    originalTitle: originalTitle,
    originalLanguage: flag,
    graduation:  graduation,
    star: addStar(graduation),
    posterimg:img,
    id: id,
    type:type

  }

  var itemText = $(".new__film");
  var template = $("#film__template").html();
  var compiled = Handlebars.compile(template);
  var textFilm = compiled(templateItem);
  itemText.append(textFilm);
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




function pippo(){
  var me = $(this);
  var type = me.attr("data-type");
  var id = me.attr("data-id");
  console.log(type);
  console.log(id);
  var urlid = "https://api.themoviedb.org/3/" + type + "/" + id ;
  var urltype = "https://api.themoviedb.org/3/" + type + "/" + id +"/credits"
  console.log(urlid);
  console.log(urltype);
  var dataout ={
    api_key: "ef19f025849e34c73791406b46789e39",
    language: "it-IT",
  }
  $.ajax ({
    url: urlid,
    method: "GET",
    data: dataout,
    success: function(data){
      var res = data.results;
      // for (var i =0; i < 8 ; i++) {
      //   var res = ress[i];
        var title = res.title;
        var originalTitle = res.original_title;
        var date = res.release_date;
        var riassunto =res.overview;
        if (res.poster_path == null) {
          var posterimg = "img/image_not_found.jpg"
        }else {
          posterimg = "https://image.tmdb.org/t/p/w300" + res.poster_path;
        }
        printPippo(title, originalTitle, posterimg, date, riassunto);

      // }
    }
  })

}


function printPippo(title, originalTitle, img, date, riassunto){
  var flag = addFleg(originalLanguage);
  var templateItem = {
    title: title,
    originalTitle: originalTitle,
    img:img,
    date:date,
    riassunto:riassunto


  }
  var itemText = $(".info__show");
  var template = $("#back__template").html();
  var compiled = Handlebars.compile(template);
  var textFilm = compiled(templateItem);
  itemText.append(textFilm);
}



function removeSerch(){
  var clear = $(".container__item");
  clear.remove();

}



function roundNumber(vote){
  var votefive = (vote/2);
  round = Math.floor(votefive);
  return round;
}



function serchResults(){
  var min = 0;
  var max = 8;
  ajaxTopFilm(min,max);
  ajaxTopSeries(min,max);

  $(".input__text").keyup(function(event,){
   if (event.which == 13) {
     removeSerch();
     var min = 0;
     var max = 8;

     var messaggio = $(this).val();
     console.log(messaggio);
     ajaxFilm(messaggio, min, max);
     ajaxSeries(messaggio, min, max);
     ajaxTopFilm(min, max);
     ajaxTopSeries(min, max);
   }
 })

 $(".film__button").click(function(){
   var min = 0;
   var max = 20;
   removeSerch();
   ajaxTopFilm(min,max);
 })
 $(".series__button").click(function(){
   var min = 0;
   var max = 20;
   removeSerch();
   ajaxTopSeries(min,max);
 })
 $(".actor__button").click(function(){
   var min = 0;
   var max = 20;
   removeSerch();
   ajaxTopActor(min,max);
 })

 $(document).on("click", ".container__item", pippo)
}


function init(){
   serchResults()



}
$(document).ready(init)
