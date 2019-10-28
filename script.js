/* Exercise 2: Color picker */
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



