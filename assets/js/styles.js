
$(document).ready(function(){

//Progress Bar
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


// Modal Popup
$(function() {

    var modal = $(".ko_modals");
    var container = $(".ko_modal_container");
    var btn = $("#open-modal");
    var close = $(".close");

    // Open modal
    btn.click(function(){
        modal.fadeIn();

    });

    // Close button 
    close.click(function(){
        modal.hide();
    });

    // Close modal when click outside modal container
    modal.mousedown(function(e){
        var clicked = $(e.target);
        if (clicked.is('.ko_modal_container') || clicked.parents().is('.ko_modal_container')){
            return;
        }else{
            modal.hide();
        }
    });

});



});