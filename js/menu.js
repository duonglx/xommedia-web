$(document).ready(function(){

    $("#main-menu").on('click','a', function(){

        // Remove selected class from all links
        $('#main-menu a').removeClass('selected');

        // Add selected class to clicked link
        $(this).addClass('selected');

    });

});