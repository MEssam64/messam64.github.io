var circleWidth = 50;
var growthAmount = 10;
var growthRate = 250;
var circleCount = 1;
var drawingHeight;
var drawingWidth;
var mainDrawingDiv;
var timer = null;

$(document).ready(function () {
    $('#circle_width').prop('value', circleWidth);
    $('#circle_growth_amount').prop('value', growthAmount);
    $('#circle_growth_rate').prop('value', growthRate);
    $('#circle_count').prop('value', circleCount);
    $('#start').click(function () {
        readInputData();
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }
        addNewCircle(mainDrawingDiv, circleWidth);
        timer = setInterval(increaseCircleSize, growthRate, mainDrawingDiv, growthAmount);
    });

    drawingWidth = visualViewport.width;
    drawingHeight = visualViewport.height - $('#control').height();
    mainDrawingDiv = $('#main_area');
    addNewCircle(mainDrawingDiv);
    timer = setInterval(increaseCircleSize, growthRate, mainDrawingDiv, growthAmount);
});

function addNewCircle(divv, circleWidth = 50) {
    for (var i = 0; i < circleCount; i++) {
        var NewDivCircle = $('<div></div>');
        var r = getRandomArbitrary(0, 256);
        var g = getRandomArbitrary(0, 256);
        var b = getRandomArbitrary(0, 256);
        var top = getRandomArbitrary(0.25 * drawingHeight, 0.75 * drawingHeight);
        var left = getRandomArbitrary(0.25 * drawingWidth, 0.75 * drawingWidth);
        $(NewDivCircle).css('width', circleWidth)
            .css('height', circleWidth)
            .css('border-radius', circleWidth / 2)
            .css('background-color', rgb(r, g, b))
            .css('position', 'relative')
            .css('top', top)
            .css('left', left)
            .css('margin', '10px')
            .css('float', 'left');
        $(NewDivCircle).on('click', function () {
            $(this).remove();
        });
        $(divv).append(NewDivCircle);
    }

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function rgb(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}

function increaseCircleSize(div, growthAmount) {
    if (timer !== null && $(div).children().length === 0) {
        clearInterval(timer);
        timer = null;
    }
    else {
        $(div).children().each(function () {
            w = $(this).width();
            h = $(this).height();
            r = $(this).css('border-radius');
            $(this).css('width', w + growthAmount)
                .css('height', h + growthAmount)
                .css('border-radius', (w + growthAmount) / 2);
        });
    }

}

function readInputData() {
    circleWidth = parseInt($('#circle_width').prop('value'));
    growthAmount = parseInt($('#circle_growth_amount').prop('value'));
    growthRate = parseInt($('#circle_growth_rate').prop('value'));
    circleCount = parseInt($('#circle_count').prop('value'));
}