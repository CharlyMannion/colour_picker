/* Exercise 2: Color picker */
var defaultColors = [ 'rgb(132, 73, 209)', 'rgb(243, 71, 9)', 'rgb(230, 22, 147)'];

$(document).ready(function() {
    defaultColors.forEach(function(defaultColor) {
        addBox(defaultColor);
    });
    var randomColorResult = randomiseColor();
    $('.preview').css('background-color', randomColorResult);
  });

$(document).on('keyup', '#color', function() {
    setPreviewColor($('#color').val());
});

$(document).on('click', '#add-to-favorite', function() {
    if ($("#colors .item").length >= 16) {
        $("#colors .item").last().remove();
        setBoxColour();
    } 
    else {
        setBoxColour();git 
    };
});

function setBoxColour() {
    var boxColor = $('#color').val();
    addBox(boxColor);
    $('#color').val('')
}


function setPreviewColor(inputColor) {
    $('.preview').css('background-color', inputColor);
    $('.color-code').text(inputColor);
};

function addBox(color) {
    var newBox = '<div class="item" style="background-color: ' + color + ';"></div>';
    $('#colors').prepend(newBox);
}

function randomiseColor() {
    var randomSelection = defaultColors[Math.floor( Math.random() * defaultColors.length )];
    return randomSelection;
}

