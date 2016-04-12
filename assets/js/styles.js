
$(document).ready(function(){

var percent = 80;
var progressBarWidth = 0

function progress(percent, $element) {
    progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 1000);
}

progress(percent, $('#ko_progress_wrapper'));


$(function(){
    var label = $('#ko_progress_bar_tooltip');
     
  
    //Animate tooltip along with progress bar
    label.animate({left: progressBarWidth-25},1000);

    //Animate tooltip counter
    label.children('.cls-tooltip-text').text('Counter',0).animate({
        Counter: percent
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now)+"%");
            }
        });
 });


});