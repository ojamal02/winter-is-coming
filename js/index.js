$(document).ready(function(){
  
  var quote;
  var speaker;
  
function apiCall() {
  $.getJSON('https://got-quotes.herokuapp.com/quotes', function(Data){
    quote = Data.quote;
    speaker = Data.character;
    $('#quote').text("\""+quote+"\"");
    $('#speaker').text('-'+ speaker);
    });
 };
  
  apiCall();
  
  $('.grab-quote').on('click',function(){
  event.preventDefault();
  apiCall();
  });
});