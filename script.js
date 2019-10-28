/* Exercise 2: Color picker */
var defaultColors = [ '22ac5e', 'd68236', '770077' ];

$(document).ready(function() {
    defaultColors.forEach(function(defaultColor) {
        addBox(defaultColor);
    });
  });

$(document).on('keyup', '#color', function() {
    setPreviewColor($('#color').val());
});

$(document).on('click', '#add-to-favorite', function() {
    var boxColor = $('#color').val();
    addBox(boxColor);
    $('#color').val('')
});


function setPreviewColor(inputColor) {
    $('.preview').css('background-color', inputColor);
    $('.color-code').text(inputColor);
};

function addBox(color) {
    var newBox = '<div class="item" style="background-color: ' + color + ';"></div>';
    $('#colors').prepend(newBox);
}



