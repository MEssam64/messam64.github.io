var isStarted = false;

$(document).ready(function () {
    $('#maze > .boundary').mouseover(function () {
        if (isStarted === true) {
            $('#maze > .boundary').each(function () {
                $(this).addClass('youlose');
            });
            isStarted = false;
            $('#status').text("Sorry, you lost. :[");
        }

    });

    $('#start').click(function () {
        isStarted = true;
        $('#maze > .boundary').removeClass('youlose');
        $('#status').text("let's Go...");
    });

    $('#end').mouseover(function () {
        if (isStarted) {
            isStarted = false;
            alert('You win :)');
            $('#status').text("You win! :]");
        }
    });

    $('#maze').mouseleave(function () {
        if (isStarted) {
            $('#maze > .boundary').each(function () {
                $(this).addClass('youlose');
            });
            isStarted = false;
            $('#status').text("Sorry, you lost. :[");
        }
    });
});