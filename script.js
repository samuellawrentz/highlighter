var input = $('input');
var button = $('button');

button.click(function(){
    $('.text').highlighter(input.val());
})