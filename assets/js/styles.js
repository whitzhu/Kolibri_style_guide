
$(document).ready(function(){

var percent = 80;
var progressBarWidth = 0

function progress(percent, $element) {
    progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 1000);
}

progress(percent, $('#ko_progress_wrapper'));


$(function(){
    var label = $('#ko_progress_label');
     
  
     label.children('.cls-label3').text(percent +"%");
     // label.css({ left: progressBarWidth-25, position:'absolute'});
     // label.animate({ width: progressBarWidth }, 500).html(percent + "% ");
     label.animate({left: progressBarWidth-25},1000);

 });



});