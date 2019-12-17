var inputs = document.getElementsByTagName('input');
for (var i = 0; i<inputs.length - 1; ++i) {
    inputs[i].onblur = inputBlur;
}