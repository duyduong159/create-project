var selector = '.nav_list a';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});