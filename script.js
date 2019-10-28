/* Exercise 2: Color picker */
function setPreviewColor(inputColor) {
    $('.preview').css('background-color', inputColor);
    $('.color-code').text(inputColor);
}

$(document).on('keyup', '#color', function() {
    setPreviewColor($('#color').val());
})
