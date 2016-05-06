
$(document).ready(function(){

$(function(){

    var list_item = $('.indicator_list li a');
    list_item.click(function(){
        list_item.removeClass('active');
        $(this).addClass('active');
        console.log('nav bar was clicked');
    });

});


$(function(){

    //Progress Bar
    var percent = 80;
    var progressBarWidth = 0
    var label = $('#ko_progress_bar_tooltip');

    function progress(percent, $element) {
        progressBarWidth = percent * $element.width() / 100;
        $element.find('div').animate({ width: progressBarWidth }, 1000);
    }

    //Animate Progress Bar
    progress(percent, $('#ko_progress_wrapper')); 
     
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